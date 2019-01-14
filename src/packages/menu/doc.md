# Menu 菜单

## 单选

```html
<nut-menu
    :isVisible="visible.isVisible1"
    :list="list1"
    type="simple"
    @close="switchMenu('isVisible1',1)"
    @choose="chooseMenu">
</nut-menu>

```

## 多选style1(一、二、三)列
```html
<nut-menu
    :isVisible="visible.isVisible2"
    :list="list2"
    col="1"
    type="multiple"
    @close="switchMenu('isVisible2',2)"
    @reset="reset"
    @ok="ok"
    @maxTip="maxTip">
</nut-menu>
<nut-menu
    :isVisible="visible.isVisible3"
    :list="list2"
    col="2"
    type="multiple"
    @close="switchMenu('isVisible3',2)"
    @reset="reset"
    @ok="ok"
    @maxTip="maxTip">
</nut-menu>
<nut-menu
    :isVisible="visible.isVisible4"
    :list="list2"
    col="3"
    type="multiple"
    @close="switchMenu('isVisible4',2)"
    @reset="reset"
    @ok="ok"
    @maxTip="maxTip">
</nut-menu>
```

## 多选style2(一、二、三)列
```html
<nut-menu
    :isVisible="visible.isVisible5"
    :list="list3"
    mulstyle="style2"
    type="multiple"
    col="1"
    @close="switchMenu('isVisible5',3)"
    @reset="reset"
    @ok="ok"
    @maxTip="maxTip">
</nut-menu>
<nut-menu
    :isVisible="visible.isVisible6"
    :list="list3"
    mulstyle="style2"
    type="multiple"
    col="2"
    @close="switchMenu('isVisible6',3)"
    @reset="reset"
    @ok="ok"
    @maxTip="maxTip">
</nut-menu>
<nut-menu
    :isVisible="visible.isVisible7"
    :list="list3"
    mulstyle="style2"
    type="multiple"
    col="3"
    @close="switchMenu('isVisible7',3)"
    @reset="reset"
    @ok="ok"
    @maxTip="maxTip">
</nut-menu>
```

## 多选style3(一、二、三)列,允许选择的最大数量为3个

```html
<nut-menu
    :isVisible="visible.isVisible8"
    :list="list4"
    type="multiple"
    col="1"
    mulstyle="style3"
    max="3"
    @close="switchMenu('isVisible8',4)"
    @reset="reset"
    @ok="ok"
    @maxTip="maxTip">
</nut-menu>
<nut-menu
    :isVisible="visible.isVisible9"
    :list="list4"
    type="multiple"
    col="2"
    mulstyle="style3"
    max="3"
    @close="switchMenu('isVisible9',4)"
    @reset="reset"
    @ok="ok"
    @maxTip="maxTip">
</nut-menu>
<nut-menu
    :isVisible="visible.isVisible10"
    :list="list4"
    type="multiple"
    col="3"
    mulstyle="style3"
    max="3"
    @close="switchMenu('isVisible10',4)"
    @reset="reset"
    @ok="ok"
    @maxTip="maxTip">
</nut-menu>
```

## 自定义菜单

```html
<nut-menu
    :isVisible="visible.isVisible11"
    @close="switchMenu('isVisible11',5)">
    <div slot="custom" class="custom-wrap"><span>自定义</span></div>
</nut-menu>
```
```javascript
import nutMenu from './menu.vue';
export default {
  components: {
    [nutMenu.name]:nutMenu
  },
  data() {
    return {
      num:1,
      titlenum:1,
      max:6,
      visible:{
          isVisible1:false,
          isVisible2:false,
          isVisible3:false,
          isVisible4:false,
          isVisible5:false,
          isVisible6:false,
          isVisible7:false,
          isVisible8:false,
          isVisible9:false,
          isVisible10:false,
          isVisible11:false
      },
      list1:[
        {
            id:1,
            text:'综合',
            selected:true
        },
        {
            id:1,
            text:'最新上架',
            selected:false
        },
        {
            id:2,
            text:'价格最低',
            selected:false
        },
        {
            id:3,
            text:'价格最高',
            selected:false
        },
        {
            id:4,
            text:'评价最多',
            selected:false
        }
      ],
      list2:[{
          id:1,
          text:'京东物流',
          selected:true
        },
        {
          id:2,
          text:'有货优先',
          selected:false
        },
        {
          id:3,
          text:'海囤全球',
          selected:false
        },
        {
          id:4,
          text:'货到付款',
          selected:false
        },
        {
          id:5,
          text:'促销商品',
          selected:false
        },
        {
          id:6,
          text:'配送全球',
          selected:false
        }
      ],
      list4:[{
          id:1,
          text:'海尔（Haier）',
          selected:true
        },
        {
          id:2,
          text:'小天鹅（LittleSwan）',
          selected:false
        },
        {
          id:3,
          text:'美的（Midea）',
          selected:false
        },
        {
          id:4,
          text:'西门子（SIEMENS）',
          selected:false
        },
        {
          id:5,
          text:'TCL',
          selected:false
        },
        {
          id:6,
          text:'松下（Panasonic）',
          selected:false
        },
        {
          id:7,
          text:'海信（Hisense）',
          selected:false
        },
        {
          id:8,
          text:'惠而浦（whirlpool）',
          selected:false
        },
        {
          id:9,
          text:'三洋（SANYO）',
          selected:false
        },
        {
          id:10,
          text:'博世（BOSCH）',
          selected:false
        },
        {
          id:11,
          text:'威力（WEILI）',
          selected:false
        },
        {
          id:12,
          text:'LG',
          selected:false
        },
        {
          id:13,
          text:'小鸭（LittleDuck）',
          selected:false
        },
        {
          id:14,
          text:'统帅（Leader）',
          selected:false
        },
        {
          id:15,
          text:'三星（SAMSUNG）',
          selected:false
        },
        {
          id:16,
          text:'奥克斯（AUX）',
          selected:false
        },
        {
          id:17,
          text:'志高（CHIGO）',
          selected:false
        },
        {
          id:18,
          text:'创维（Skyworth）',
          selected:false
        }
      ],
      list3:[{
          id:1,
          text:'1级',
          selected:true
        },
        {
          id:2,
          text:'2级',
          selected:false
        },
        {
          id:3,
          text:'3级',
          selected:false
        },
        {
          id:4,
          text:'4级',
          selected:false
        },
        {
          id:5,
          text:'5级',
          selected:false
        }
      ],
    };
  },
  methods: {
    switchMenu(param,num) {
        this.num = num;
        this.titlenum = param.split('isVisible')[1];
        for(let key in this.visible) {
          if(key !== param) {
              this.visible[key] = false;
          }
        }
      Array.from(document.querySelectorAll('.list')).forEach(item => {
          item.style.zIndex = 0;
      });
      if(!this.visible[`${param}`]) {
          document.querySelector('.list' + this.num).style.zIndex = 9999;
      }
      this.visible[`${param}`] = !this.visible[`${param}`];
    },
    chooseMenu(item,index) {
        this.switchMenu('isVisible1',1);
        this.list1.map((value,key) => value.selected = false);
        this.$set(this.list1[index],'selected',true);
        this.$refs.title1.innerText = item.text;
    },

    reset(list) {
        this.$refs[`title${this.titlenum}`].innerText = 'menu';
    },
    ok(list) {
        let arr = [];
        list.forEach((item,index) => {
            if(item.selected) {
                arr.push(item.text);
            }
        });

        if(!!arr.length) {
            this.$refs[`title${this.titlenum}`].innerText = arr.join();
        }
    },
    maxTip() {
        alert('超过了最大选择数');
    }
  }
};
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| isAnimation | 是否启用动画 | Boolean | true
| isVisible | 是否显示 | Boolean | false
| type | 单选simple，多选multiple | String | simple
| col | 显示的列数 | String/Number | 1
| mulstyle | 多选样式，内置三种style1、style2、style3 | String | style1
| max | 多选下，允许选择的最大标签数 | String/Number | 5
| list | 选项列表 | Array | []

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| close | 遮罩点击 | 无
| choose | 单选下，选择之后触发 | 1.选择的列表对象。2.列表索引
| maxTip | 多选下，选择的数量最大时触发 | 无
| reset | 多选下，重置按钮触发 | 返回重置之后的列表
| ok | 多选下，点击确定之后触发 | 返回列表
