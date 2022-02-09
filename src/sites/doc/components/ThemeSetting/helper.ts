import { reactive, watch, onMounted, computed, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import configs from '../../../../config.json';

type Obj = {
  [k: string]: any;
};

type Store = {
  rawVariables: Obj[];
  variablesMap: Obj;
  rawStyles: Obj;
  [k: string]: any;
};

const components = configs.nav.map(({ packages }) => packages.map(({ name }) => name)).flat(1);

const getGithubRawFile = async function (url: string) {
  const response = await fetch(url);
  const res = await response.text();
  return res;
};
const getInputType = (value: string) => {
  if (/^\d+$/.test(value)) {
    return 'number';
  }
  if (/^#[A-Za-z0-9]+$/.test(value)) {
    return 'hex';
  }
  if (/^(rgb|hsl)a?\((\s*\/?\s*[+-]?\d*(\.\d+)?%?,?\s*){3,5}\)/gim.test(value)) {
    return 'rgb';
  }

  return 'input';
};
const loadScript = async (url: string) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.onload = resolve;
    script.onerror = reject;
    script.src = url;
    document.head.appendChild(script);
  });
const awaitIframe = async () => {
  while (!window.frames[0] || !window.frames[0].document.querySelector('#nav')) {
    await new Promise((r) => setTimeout(r, 100));
  }
};

const cachedStyles: Obj = {};
const store: Store = reactive({
  init: false,
  rawVariables: [],
  variablesMap: {},
  rawStyles: {}
});

// 提取变量，区分base和组件
const extractVariable = (matched: string[], variables: string, name: string, lowerCaseName: string) =>
  matched.reduce((res, str) => {
    const extract = str.replace(/\s+!default/, '').match(/(.*):(?:\s+)?([\s\S]*)(?:\s+)?;/);

    if (extract) {
      const key = extract[1];
      const value = extract[2];
      res.push({
        name, // 组件名
        lowerCaseName, // 组件名小写
        key, // 变量名
        rawValue: value, // 原始值
        computedRawValue: '', // 计算后的原始值
        value, // 编辑的值
        // 编辑的类型
        inputType: getInputType(value)
      });
    }
    return res;
  }, [] as Obj[]);
const getSassVariables = async (url: string) => {
  if (Object.keys(store.rawVariables).length) {
    return store;
  }

  const variables = await getGithubRawFile(url);
  const matchedComponentVariables = components
    .map((name) => {
      const lowerCaseName = name.toLowerCase();
      const reg = new RegExp(`(?<!\\/\\/(\\s+)?)\\$(${name}|${lowerCaseName})\\b[\\w-]+:[^:;]+;`, 'g');
      const matched = variables.match(reg);
      if (matched) {
        return extractVariable(matched, variables, name, lowerCaseName);
      }
    })
    .filter(Boolean)
    .flat(2);

  const baseVariablesReg = new RegExp(
    `\\$(?!(${matchedComponentVariables
      .map((item) => (item && `${item.name}|${item.lowerCaseName}`) || '')
      .join('|')})\\b)[\\w-]+:[^:]+;`,
    'g'
  );

  const rawVariables = matchedComponentVariables as Obj[];

  const matchedBaseVariables = variables.match(baseVariablesReg);

  if (matchedBaseVariables) {
    rawVariables.unshift(...extractVariable(matchedBaseVariables, variables, 'Base', 'base'));
  }

  const variablesMap = rawVariables.reduce((map, item) => {
    map[item.key] = 1;
    return map;
  }, {});
  store.rawVariables = rawVariables;
  store.variablesMap = variablesMap;
};

// 提取样式代码，只保留有使用变量的行
const extractStyle = (style: string) => {
  if (!store.rawVariables.length) {
    return '';
  }

  const extract = style.split('\n').filter((str) => {
    const matched = str.match(/\$[\w-]+\b/g);

    if (matched) {
      return matched.some((k) => store.variablesMap[k]);
    }
    return /(\{|\})/.test(str);
  });

  return extract.join('');
};
export const getSassStyle = async (name: string): Promise<void> => {
  if (!store.rawStyles[name]) {
    const style = await getGithubRawFile(
      `/devRaw/jd-platform-opensource/nutui/raw/next/src/packages/__VUE/${name}/index.scss`
    );
    store.rawStyles[name] = style;
  }
};

export const useThemeEditor = function (): Obj {
  const route = useRoute();

  const cssText = computed(() => {
    const variablesText = store.rawVariables.map(({ key, value }) => `${key}:${value}`).join(';');

    const styleText = Object.keys(store.rawStyles)
      .map((name) => {
        cachedStyles[name] = cachedStyles[name] || extractStyle(store.rawStyles[name]);
        return cachedStyles[name] || '';
      })
      .join('');

    return `${variablesText};${styleText}`;
  });

  const formItems = computed(() => {
    const name = route.path.substring(1);

    return store.rawVariables.filter(({ lowerCaseName }) => lowerCaseName === name);
  });

  onMounted(async () => {
    if (!store.init) {
      await Promise.all([
        getSassVariables('/devRaw/jd-platform-opensource/nutui/raw/next/src/packages/styles/variables.scss'),
        loadScript('https://cdnout.com/sass.js/sass.sync.min.js')
      ]);
      store.init = true;
    }
  });

  watch(
    () => route.path,
    (path) => {
      const name = path.substring(1);
      if (name !== 'base') {
        getSassStyle(name);
      }
    },
    {
      immediate: true
    }
  );

  let timer: any = null;
  onBeforeUnmount(() => {
    clearTimeout(timer);
  });
  watch(
    () => cssText.value,
    (css) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const Sass = (window as any).Sass;
        Sass &&
          Sass.compile(css, async (res: Obj) => {
            await awaitIframe();
            const iframe = window.frames[0] as any;
            if (res.text && iframe) {
              if (!iframe.__styleEl) {
                const style = iframe.document.createElement('style');
                style.id = 'theme';
                iframe.__styleEl = style;
              }
              iframe.__styleEl.innerHTML = res.text;
              iframe.document.head.appendChild(iframe.__styleEl);
            }
          });
      }, 300);
    },
    { immediate: true }
  );

  return {
    formItems,
    downloadScssVariables() {
      if (!store.rawVariables.length) {
        return;
      }

      let temp = '';
      const variablesText = store.rawVariables
        .map(({ name, key, value }) => {
          let comment = '';
          if (temp !== name) {
            temp = name;
            comment = `\n// ${name}\n`;
          }
          return comment + `${key}: ${value};`;
        })
        .join('\n');
      download(`// NutUI主题定制\n${variablesText}`, 'variables.scss');
    }
  };
};

function download(content: string, filename: string) {
  const eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.style.display = 'none';

  const blob = new Blob([content]);
  eleLink.href = URL.createObjectURL(blob);

  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}
