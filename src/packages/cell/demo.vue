<template>
    <div>
        <h4>基本用法</h4>
        <div>
            <nut-cell title="我是标题" desc="描述文字" @click-cell="clickEvnt" to="/index">
            </nut-cell>
            <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="带链接" target="_target">
            </nut-cell>
        </div>
        <h4>通过Slot插槽分发内容</h4>
        <div>
            <nut-cell :is-link="true" :show-icon="true">
                <span slot="title">我是主标题</span>
                <span slot="sub-title">我是副标，我们都是通过Slot分发的</span>
                <span slot="desc">我是描述</span>
            </nut-cell>
            <nut-cell :show-icon="true">
                <span slot="title">通过Slot自定义右侧ICON</span>
                <nut-icon type="tick" slot="icon" size="15px" color="#848484"></nut-icon>
            </nut-cell>
            <nut-cell :show-icon="true" title="我是标题" sub-title="我是副标题" desc="展示默认ICON">
              <div slot="avatar"><nut-avatar></nut-avatar></div>
            </nut-cell>
        </div>
    </div>
</template>

<script>
import locale from '../../mixins/locale';
import {locale as i18n} from '../../locales';
import Icon from '../icon/icon.vue';
import Avatar from '../avatar/avatar.vue';


export default {
  mixins: [locale],
  components:{
    'nut-icon':Icon,
    'nut-avatar':Avatar
  },
  data() {
    return {};
  },
  methods: {
    clickEvnt(){
      console.log('click cell');
    }
  },
  mounted() {
        
  }
};
</script>

<style lang="scss" scoped>
.demo {
  padding-left: 0;
  padding-right: 0;
}
h4 {
  padding: 0 10px;
}
</style>
