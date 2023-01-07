<template>
  <div class="demo">
    <h2>{{ translate('svg') }}</h2>
    <nut-cell>
      <Add color="red" />
    </nut-cell>
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <IconFont name="dongdong" />
      <IconFont name="JD" />
    </nut-cell>
    <h2>{{ translate('imageLink') }}</h2>
    <nut-cell>
      <IconFont
        size="40"
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      >
      </IconFont>
    </nut-cell>
    <h2>{{ translate('iconColor') }}</h2>
    <nut-cell>
      <IconFont name="dongdong" color="#fa2c19" />
      <IconFont name="dongdong" color="#64b578" />
      <IconFont name="JD" color="#fa2c19" />
    </nut-cell>

    <h2>{{ translate('iconSize') }}</h2>
    <nut-cell>
      <IconFont name="dongdong" />
      <IconFont name="dongdong" size="24" />
      <IconFont name="dongdong" size="26" />
    </nut-cell>

    <nut-cell-group v-for="item in icons.data" :title="currentLang == 'zh-CN' ? item.name : item.nameEn" :key="item">
      <nut-cell>
        <ul>
          <li v-for="_item in item.icons" :key="_item">
            <IconFont :name="_item" @click="copyTag(_item)" />
            <span>{{ _item }}</span>
          </li>
        </ul>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group v-for="item in icons.style" :title="currentLang == 'zh-CN' ? item.name : item.nameEn" :key="item">
      <nut-cell>
        <ul>
          <li v-for="it in item.icons" :key="it">
            <IconFont
              :name="it.name"
              :class="`nut-icon-${it['animation-name']} nut-icon-${it['animation-time']}`"
              @click="copyTag(it['animation-name'])"
            >
            </IconFont>
            <span>{{ it['animation-name'] }}</span>
          </li>
        </ul>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { useTranslate, currentLang } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: 'IconFont 基础用法',
      svg: 'Svg 按需使用',
      imageLink: '图片链接',
      iconColor: '图标颜色',
      iconSize: '图标大小',
      copyToast: '复制成功'
    },
    'en-US': {
      basic: 'IconFont Basic Usage',
      svg: 'Svg import on demand',
      imageLink: 'Image Link',
      iconColor: 'Icon Color',
      iconSize: 'Icon Size',
      copyToast: 'Copied successfully'
    }
  });
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('icon');
import { showToast } from '@/packages/nutui.vue';
import { Add, IconFontConfig, IconFont } from '@nutui/icons-vue';
export default createDemo({
  props: {},
  components: { IconFont, Add },
  setup() {
    initTranslate();
    const copyTag = (name: string) => {
      const text = `<IconFont name="${name}"></IconFont>`;
      const displayText = `&lt;Icon name="${name}"&gt;&lt;/Icon&gt;`;
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('value', text);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        showToast.text(`${translate('copyToast')}: <br/>${displayText}`);
      }
      document.body.removeChild(input);
    };
    return { icons: IconFontConfig, translate, currentLang, copyTag };
  }
});
</script>

<style lang="scss" scoped>
.nut-cell {
  > .nutui-iconfont {
    margin-right: 10px;
  }
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  li {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      height: 40px;
      font-size: 12px;
      text-align: center;
    }
    .nutui-iconfont {
      margin: 16px 0 16px;
    }
  }
}
</style>
