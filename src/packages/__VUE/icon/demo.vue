<template>
  <div class="demo">
    <Add color="red" width="100px" height="100px" />
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <Icon name="dongdong" />
      <Icon name="JD" />
    </nut-cell>
    <h2>{{ translate('imageLink') }}</h2>
    <nut-cell>
      <Icon
        size="40"
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      >
      </Icon>
    </nut-cell>
    <h2>{{ translate('iconColor') }}</h2>
    <nut-cell>
      <Icon name="dongdong" color="#fa2c19" />
      <Icon name="dongdong" color="#64b578" />
      <Icon name="JD" color="#fa2c19" />
    </nut-cell>

    <h2>{{ translate('iconSize') }}</h2>
    <nut-cell>
      <Icon name="dongdong" />
      <Icon name="dongdong" size="24" />
      <Icon name="dongdong" size="26" />
    </nut-cell>

    <nut-cell-group v-for="item in icons.data" :title="currentLang == 'zh-CN' ? item.name : item.nameEn" :key="item">
      <nut-cell>
        <ul>
          <li v-for="_item in item.icons" :key="_item">
            <Icon :name="_item" @click="copyTag(_item)" />
            <span>{{ _item }}</span>
          </li>
        </ul>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group v-for="item in icons.style" :title="currentLang == 'zh-CN' ? item.name : item.nameEn" :key="item">
      <nut-cell>
        <ul>
          <li v-for="it in item.icons" :key="it">
            <Icon
              :name="it.name"
              :class="`nut-icon-${it['animation-name']} nut-icon-${it['animation-time']}`"
              @click="copyTag(it['animation-name'])"
            >
            </Icon>
            <span>{{ it['animation-name'] }}</span>
          </li>
        </ul>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { useTranslate, currentLang } from '@/sites/assets/util/useTranslate';
import { IconFontConfig, Add } from '@nutui/icons-vue';

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
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('icon');
import { Toast } from '@/packages/nutui.vue';
import { Icon } from '@nutui/icons-vue';
export default createDemo({
  props: {},
  components: { Icon, Add },
  setup() {
    initTranslate();
    const copyTag = (name: string) => {
      const text = `<Icon name="${name}"></Icon>`;
      const displayText = `&lt;Icon name="${name}"&gt;&lt;/Icon&gt;`;
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
