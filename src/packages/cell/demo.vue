<template>
    <div>
        <h4>{{nutTranslate('demo.cell.h4_1', {subTitle: nutTranslate('demo.cell.h4_1sesc')})}}</h4>
        <div>
            <nut-cell :title="nutTranslate('demo.cell.h4_1title')" :desc="nutTranslate('demo.cell.h4_1sesc')">
            </nut-cell>
            <nut-cell :showIcon="true" :title="nutTranslate('demo.cell.h4_1title')" :subTitle="nutTranslate('demo.cell.h4_1subtitle')" :desc="nutTranslate('demo.cell.h4_1desc')">
            </nut-cell>
            <nut-cell :isLink="true" linkUrl="//m.jd.com" :showIcon="true" :title="nutTranslate('demo.cell.h4_1link')">
            </nut-cell>
        </div>
        <h4>{{nutTranslate('demo.cell.h4_2')}}</h4>
        <div>
            <nut-cell :isLink="true" :showIcon="true">
                <span slot="title">我是主标题</span>
                <span slot="sub-title">我是副标，我们都是通过Slot分发的</span>
                <span slot="desc">我是描述</span>
            </nut-cell>
            <nut-cell :showIcon="true">
                <span slot="title">通过Slot自定义右侧ICON</span>
                <img slot="icon" src="data:image/svg+xml, %3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 3.2c0-.7-.5-1.2-1.2-1.2-.3 0-.7.1-.9.4-2.4 2.5-6.2 6.8-7.7 8.5-.1.1-.2.2-.4 0L2.1 7.2c-.3-.3-.6-.4-.9-.4-.7 0-1.2.5-1.2 1.1 0 .3.1.6.3.8l.1.1 4.9 4.9c.8.8 1.6 0 2-.5 4.1-4.4 7.9-8.6 8.4-9.2.2-.3.3-.5.3-.8z' fill='%23737383'/%3E%3C/svg%3E" alt="">
            </nut-cell>
        </div>
    </div>
</template>

<script>
import locale from '../../mixins/locale';
import {locale as i18n} from '../../locales';

export default {
  mixins: [locale],
  data() {
    return {};
  },
  methods: {},
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
