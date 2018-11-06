<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例</h5>

        <h6>示例1: 单选、简单数组</h6>
        <nut-dropdown :options="options" @selectedChange='multipleSelected'></nut-dropdown>
        <nut-codebox :code="demo1"></nut-codebox>

        <h6>示例2: 单选、简单数组、设置默认值</h6>
        <nut-dropdown :options="options" @selectedChange='multipleSelected' defaultSelected='二'></nut-dropdown>
        <nut-codebox :code="demo2"></nut-codebox>

        <h6>示例3: 多选、简单数组</h6>
        <nut-dropdown :options="options" multiple @selectedChange='selectedChange'></nut-dropdown>
        <nut-codebox :code="demo3"></nut-codebox>

        <h6>示例4: 多选、简单数组、设置默认值</h6>
        <nut-dropdown :options="options" multiple @selectedChange='selectedChange' :defaultSelected="['一','二']"></nut-dropdown>
        <nut-codebox :code="demo4"></nut-codebox>

        <h6>示例5: 单选、复杂对象数组、自定义展示字段</h6>
        <nut-dropdown :options="options2" @selectedChange='selectedChange' optionKey='name'></nut-dropdown>
        <nut-codebox :code="demo5"></nut-codebox>

        <h6>示例6: 多选、复杂对象数组、自定义展示字段</h6>
        <nut-dropdown :options="options2" multiple @selectedChange='selectedChange' optionKey='name'></nut-dropdown>
        <nut-codebox :code="demo6"></nut-codebox>

        <h6>示例7: 单选、复杂对象数组、自定义展示字段、设置默认值</h6>
        <nut-dropdown :options="options2" @selectedChange='selectedChange' optionKey='name' :defaultSelected="{name: '李四', id: 2}"></nut-dropdown>
        <nut-codebox :code="demo7"></nut-codebox>

        <h6>示例8: 多选、复杂对象数组、自定义展示字段、设置默认值</h6>
        <nut-dropdown :options="options2" multiple @selectedChange='selectedChange' optionKey='name' :defaultSelected="[{name: '李四', id: 2}]"></nut-dropdown>
        <nut-codebox :code="demo8"></nut-codebox>

        <h6>示例9: 多选、复杂对象数组、自定义展示字段、支持搜索</h6>
        <nut-dropdown :options="options2" multiple @selectedChange='selectedChange' optionKey='name' search></nut-dropdown>
        <nut-codebox :code="demo9"></nut-codebox>

        <h6>示例10: 单选、简单数组、支持搜索</h6>
        <nut-dropdown :options="options" @selectedChange='selectedChange' search></nut-dropdown>
        <nut-codebox :code="demo10"></nut-codebox>
    </div>

</template>

<script>
export default {
  data() {
    return {
      options: ['一','二','三','四'],
      options2: [{name: '张三', id: 1}, {name: '李四', id: 2}, {name: '王五', id: 3}, {name: '马六', id: 4}, {name: '王久', id: 5}],
      code: `
        export default {
          data() {
            retuen {
              options: ['一','二','三','四'],
              options2: [{name: '张三', id: 1}, {name: '李四', id: 2}, {name: '王五', id: 3}, {name: '马六', id: 4}, {name: '王久', id: 5}],
            }
          },
          methods: {
            selectedChange(option) {
              console.log(option)
            },
          }
        }
      `,
      demo1: `<nut-dropdown :options="options" @selectedChange='multipleSelected'></nut-dropdown>`,
      demo2: `<nut-dropdown :options="options" @selectedChange='selectedChange' defaultSelected='二'></nut-dropdown>`,
      demo3: `<nut-dropdown :options="options" multiple @selectedChange='selectedChange'></nut-dropdown>`,
      demo4: `<nut-dropdown :options="options" multiple @selectedChange='selectedChange' :defaultSelected="['一','二']"></nut-dropdown>`,
      demo5: `<nut-dropdown :options="options2" @selectedChange='selectedChange' optionKey='name' ></nut-dropdown>`,
      demo6: `<nut-dropdown :options="options2" multiple @selectedChange='selectedChange' optionKey='name'></nut-dropdown>`,
      demo7: `<nut-dropdown :options="options2" @selectedChange='selectedChange' optionKey='name' :defaultSelected="{name: '李四', id: 2}"></nut-dropdown>`,
      demo8: `<nut-dropdown :options="options2" multiple @selectedChange='selectedChange' optionKey='name' :defaultSelected="[{name: '李四', id: 2}]"></nut-dropdown>`,
      demo9: `<nut-dropdown :options="options2" multiple @selectedChange='selectedChange' optionKey='name' search></nut-dropdown>`,
      demo10: `<nut-dropdown :options="options" @selectedChange='selectedChange' search></nut-dropdown>`
    };
  },
  mounted(){
  },
  methods: {
    selectedChange(option) {
      console.log(option)
    },
    multipleSelected(options) {
      console.log(options)
    }
  }
};
</script>

<style lang="scss">

</style>

