<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-icon name="dongdong"></nut-icon>
      <nut-icon name="JD"></nut-icon>
    </nut-cell>
    <h2>{{ translate('imageLink') }}</h2>
    <nut-cell>
      <nut-icon
        size="40"
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      >
      </nut-icon>
    </nut-cell>
    <h2>{{ translate('iconColor') }}</h2>
    <nut-cell>
      <nut-icon name="dongdong" color="#fa2c19"></nut-icon>
      <nut-icon name="dongdong" color="#64b578"></nut-icon>
      <nut-icon name="JD" color="#fa2c19"></nut-icon>
    </nut-cell>

    <h2>{{ translate('iconSize') }}</h2>
    <nut-cell>
      <nut-icon name="dongdong"></nut-icon>
      <nut-icon name="dongdong" size="24"></nut-icon>
      <nut-icon name="dongdong" size="26"></nut-icon>
    </nut-cell>

    <nut-cell-group v-for="item in icons.data" :title="currentLang == 'zh-CN' ? item.name : item.nameEn" :key="item">
      <nut-cell>
        <ul>
          <li v-for="item in item.icons" :key="item">
            <nut-icon :name="item" @click="copyTag(item)"></nut-icon>
            <span>{{ item }}</span>
          </li>
        </ul>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group v-for="item in icons.style" :title="currentLang == 'zh-CN' ? item.name : item.nameEn" :key="item">
      <nut-cell>
        <ul>
          <li v-for="it in item.icons" :key="it">
            <nut-icon
              :name="it.name"
              :class="`nut-icon-${it['animation-name']} nut-icon-${it['animation-time']}`"
              @click="copyTag(it['animation-name'])"
            >
            </nut-icon>
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
      basic: '基本用法',
      imageLink: '图片链接',
      iconColor: '图标颜色',
      iconSize: '图标大小',
      copyToast: '复制成功'
    },
    'en-US': {
      basic: 'Basic Usage',
      imageLink: 'Image Link',
      iconColor: 'Icon Color',
      iconSize: 'Icon Size',
      copyToast: 'Copied successfully'
    }
  });
// import icons from '@/packages/styles/font/iconfont.json';
import icons from '@/packages/styles/font/config.json';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('icon');
import { Toast } from '@/packages/nutui.vue';
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const copyTag = (name: string) => {
      const text = `<nut-icon name="${name}"></nut-icon>`;
      const displayText = `&lt;nut-icon name="${name}"&gt;&lt;/nut-icon&gt;`;
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('value', text);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        Toast.text(`${translate('copyToast')}: <br/>${displayText}`);
      }
      document.body.removeChild(input);
    };
    return { icons, translate, currentLang, copyTag };
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
