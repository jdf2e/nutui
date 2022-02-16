import config from '@/sites/config/env';
import { reactive, watch, onMounted, computed, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import configs from '../../../../config.json';

type Obj = {
  [k: string]: any;
};

type Store = {
  variables: Obj[];
  variablesMap: Obj;
  rawStyles: Obj;
  [k: string]: any;
};

const components = configs.nav.map(({ packages }) => packages.map(({ name }) => name)).flat(1);

const getRawFileText = async function (url: string) {
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

// 提取变量
const extractVariables = (matched: string[], name: string, lowerCaseName: string) =>
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

// 提取样式代码，只保留有使用变量的行
const extractStyle = (style: string) => {
  if (!store.variables.length) {
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

const parseSassVariables = (text: string, components: string[]) => {
  const matchedComponentVariables = components
    .map((name) => {
      const lowerCaseName = name.toLowerCase();
      const reg = new RegExp(`(?<!\\/\\/(\\s+)?)\\$(${name}|${lowerCaseName})\\b[\\w-]+:[^:;]+;`, 'g');
      const matched = text.match(reg);
      if (matched) {
        return extractVariables(matched, name, lowerCaseName);
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

  const variables = matchedComponentVariables as Obj[];

  const matchedBaseVariables = text.match(baseVariablesReg);

  // 组件变量以外的都作为基础变量
  if (matchedBaseVariables) {
    variables.unshift(...extractVariables(matchedBaseVariables, 'Base', 'base'));
  }

  return variables;
};

const cachedStyles: Obj = {};
const store: Store = reactive({
  init: false,
  variables: [],
  variablesMap: {},
  rawStyles: {}
});

const getSassVariables = async () => {
  // vite 启动模式 bug 待修复
  const rawVariablesText = await getRawFileText(`${config.themeUrl}/styles/variables.scss`);
  const rawVariables = parseSassVariables(rawVariablesText, components);

  // 固定自定义主题的访问链接: https://nutui.jd.com/theme/?theme=自定义变量的文件地址#/
  // e.g. https://nutui.jd.com/theme/?theme=xxx.com%2variables.scss#/
  // vite issue https://github.com/vitejs/vite/issues/6894
  const params = new URLSearchParams(window.location.search);
  const customUrl = params.get('theme');
  if (customUrl) {
    const customVariablesText = await getRawFileText(customUrl);
    const customVariables = parseSassVariables(customVariablesText, components);

    // merge
    rawVariables.forEach((item) => {
      const custom = customVariables.find(({ key }) => key === item.key);
      if (custom) {
        item.value = custom.value;
      }
    });
  }

  const variablesMap = rawVariables.reduce((map, item) => {
    map[item.key] = 1;
    return map;
  }, {});
  store.variables = rawVariables;
  store.variablesMap = variablesMap;
};

export const getRawSassStyle = async (name: string): Promise<void> => {
  if (!store.rawStyles[name]) {
    const style = await getRawFileText(`${config.themeUrl}/packages/${name}/index.scss`);
    store.rawStyles[name] = style;
  }
};

export const useThemeEditor = function (): Obj {
  const route = useRoute();

  const cssText = computed(() => {
    const variablesText = store.variables.map(({ key, value }) => `${key}:${value}`).join(';');

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

    return store.variables.filter(({ lowerCaseName }) => lowerCaseName === name);
  });

  onMounted(async () => {
    if (!store.init) {
      await Promise.all([getSassVariables(), loadScript('https://cdnout.com/sass.js/sass.sync.min.js')]);
      store.init = true;
    }
  });

  watch(
    () => route.path,
    (path) => {
      const name = path.substring(1);
      if (name !== 'base') {
        getRawSassStyle(name);
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
      if (!store.variables.length) {
        return;
      }

      let temp = '';
      const variablesText = store.variables
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
