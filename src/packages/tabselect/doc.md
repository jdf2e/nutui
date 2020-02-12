# TabSelect 分类选择

## 基本用法

```html
<nut-tabselect
  :mainTitle="mainTitle"
  :subTitle="subTitle"
  :defaultContent="defaultContent"
  :tabList="tabList"
  :show="show"
  @close="show = false"
  @choose="choose"
  :multiple="false"
></nut-tabselect>
```

## 基本用法（多选模式）

```html
<nut-tabselect
  :mainTitle="mainTitle"
  :subTitle="subTitle"
  :defaultContent="defaultContent"
  :tabList="tabList"
  :show="show"
  @close="show = false"
  @choose="choose"
  :multiple="true"
  :max="3"
></nut-tabselect>
```

```javascript
export default {
  components: {},
  data() {
    return {
      mainTitle: "配送",
      subTitle: "送达时间",
      defaultContent: [
        "9:00——10:00",
        "10:00——11:00",
        "11:00——12:00",
        "12:00——13:00",
        "13:00——15:00",
        "15:00——17:00",
        "17:00——19:00"
      ],
      tabList: [
        {
          tabTitle: "京东快递", // 一级tab标题
          children: [
            // 一级tab内容
            {
              tabTitle: "1月13日 (星期一)", // 二级tab标题
              content: [
                // 二级tab内容，不传默认使用defaultContent字段
                "11:00——12:00",
                "12:00——13:00",
                "13:00——15:00",
                "15:00——17:00",
                "17:00——19:00"
              ]
            },
            {
              tabTitle: "1月14日 (星期二)"
            },
            {
              tabTitle: "1月15日 (星期三)"
            },
            {
              tabTitle: "1月16日 (星期四)"
            },
            {
              tabTitle: "1月17日 (星期五)"
            },
            {
              tabTitle: "1月18日 (星期六)"
            },
            {
              tabTitle: "1月19日 (星期天)"
            }
          ]
        },
        {
          tabTitle: "上门自提",
          children: [
            {
              tabTitle: "2月13日 (星期一)",
              content: ["13:00——15:00", "15:00——17:00", "17:00——19:00"]
            },
            {
              tabTitle: "2月14日 (星期二)"
            },
            {
              tabTitle: "2月15日 (星期三)"
            },
            {
              tabTitle: "2月16日 (星期四)"
            },
            {
              tabTitle: "2月17日 (星期五)"
            },
            {
              tabTitle: "2月18日 (星期六)"
            },
            {
              tabTitle: "2月19日 (星期天)"
            }
          ]
        }
      ],
      show: false
    };
  },
  methods: {
    choose(title, item) {
      console.log(title, item);
    }
  }
};
```

### Prop

| 字段           | 说明                        | 类型    | 默认值   |
| -------------- | --------------------------- | ------- | -------- |
| mainTitle      | 一级 tab 标题               | String  | ''       |
| subTitle       | 二级 tab 标题               | String  | ''       |
| defaultContent | 二级 tab 下内容完全一致时传 | Array   | null     |
| multiple       | 是否允许多选                | Boolean | false    |
| tabList        | 整体数据                    | Array   | null     |
| show           | 是否显示                    | Boolean | false    |
| max            | 多选时最多可选个数          | Number  | Infinity |

### Event

| 事件名称 | 说明                 | 回调参数                               |
| -------- | -------------------- | -------------------------------------- |
| choose   | 切换页签或选中某一项 | 点击的一级 tab ，二级 tab ，选中项内容 |
| close    | 组件隐藏时           | --                                     |
