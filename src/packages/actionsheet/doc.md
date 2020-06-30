# ActionSheet 动作面板

从底部弹出的动作菜单面板。

## 基础样式

基础样式
```html
<nut-cell 
    :show-icon="true" 
    title="基础样式" 
    :desc="option" 
    @click.native="openSwitch('isVisible')">
</nut-cell>
<nut-actionsheet 
    :is-visible="isVisible"
    @close="closeSwitch('isVisible')" 
    :option-list="optionList" 
    @choose="choose"
></nut-actionsheet>
```
```javascript
export default {
  data() {
    return {
      option: '',
      isVisible: false,
      optionList: [
        {
          name: '选项A',
          value: 0
        },
        {
          name: '选项B',
          value: 1
        },
        {
          name: '选项C',
          value: 1
        }
      ]
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    choose(itemParams) {
      this.option = itemParams.name;
    }
  }
};
```

带取消按钮
```html
<nut-cell 
    :show-icon="true" 
    title="带取消按钮" 
    :desc="option" 
    @click.native="openSwitch('isVisible')">
</nut-cell>
<nut-actionsheet 
    :is-visible="isVisible"
    @close="closeSwitch('isVisible')" 
    :is-cancle-btn="true"
    :option-list="optionList" 
    @choose="choose"
></nut-actionsheet>
```
```javascript
export default {
  data() {
    return {
      option: '',
      isVisible: false,
      optionList: [
        {
          name: '选项A',
          value: 0
        },
        {
          name: '选项B',
          value: 1
        },
        {
          name: '选项C',
          value: 1
        }
      ]
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    choose(itemParams) {
      this.option = itemParams.name;
    }
  }
};
```

展示标题
```html
<nut-cell 
    :show-icon="true" 
    title="展示标题" 
    :desc="option" 
    @click.native="openSwitch('isVisible')">
</nut-cell>
<nut-actionsheet 
    :is-visible="isVisible"
    @close="closeSwitch('isVisible')" 
    :is-cancle-btn="true"
    :option-list="optionList" 
    @choose="choose"
>
    <div slot="title">面板标题</div>
</nut-actionsheet>
```
```javascript
export default {
  data() {
    return {
      option: '',
      isVisible: false,
      optionList: [
        {
          name: '选项A',
          value: 0
        },
        {
          name: '选项B',
          value: 1
        },
        {
          name: '选项C',
          value: 1
        }
      ]
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    choose(itemParams) {
      this.option = itemParams.name;
    }
  }
};
```


展示描述信息
```html
<nut-cell 
    :show-icon="true" 
    title="展示描述信息" 
    :desc="option" 
    @click.native="openSwitch('isVisible')">
</nut-cell>
<nut-actionsheet 
    :is-visible="isVisible"
    @close="closeSwitch('isVisible')" 
    :is-cancle-btn="true"
    :option-list="optionList" 
    @choose="choose"
>
    <div slot="desc">这里是一段描述，一段描述，一段描述，一段描述</div>
</nut-actionsheet>
```
```javascript
export default {
  data() {
    return {
      option: '',
      isVisible: false,
      optionList: [
        {
          name: '选项A',
          value: 0
        },
        {
          name: '选项B',
          value: 1
        },
        {
          name: '选项C',
          value: 1
        }
      ]
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    choose(itemParams) {
      this.option = itemParams.name;
    }
  }
};
```

## 其他样式

带确认按钮
```html
<nut-cell 
    :show-icon="true" 
    title="带确认按钮" 
    :desc="option" 
    @click.native="openSwitch('isVisible')">
</nut-cell>
<nut-actionsheet 
    :is-visible="isVisible"
    @close="closeSwitch('isVisible')" 
    :is-confirm-btn="true"
    :option-list="optionList" 
    @choose="choose"
>
    <div slot="title">面板标题</div>
</nut-actionsheet>
```
```javascript
export default {
  data() {
    return {
      option: '',
      isVisible: false,
      optionList: [
        {
          name: '选项A',
          value: 0
        },
        {
          name: '选项B',
          value: 1
        },
        {
          name: '选项C',
          value: 1
        }
      ]
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    choose(itemParams) {
      this.option = itemParams.name;
    }
  }
};
```

带确认按钮
```html
<nut-cell 
    :show-icon="true" 
    title="设置禁用状态" 
    :desc="option" 
    @click.native="openSwitch('isVisible')">
</nut-cell>
<nut-actionsheet 
    :is-visible="isVisible"
    @close="closeSwitch('isVisible')" 
    :option-list="optionList" 
    @choose="choose"
>
</nut-actionsheet>
```
```javascript
export default {
  data() {
    return {
      option: '',
      isVisible: false,
      optionList: [
        {
          name: '选项A',
          value: 0
        },
        {
          name: '选项B',
          value: 1,
          disable: true
        },
        {
          name: '选项C',
          value: 1
        }
      ]
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    choose(itemParams) {
      this.option = itemParams.name;
    }
  }
};
```

高亮选中项
```html
<nut-cell 
    :show-icon="true" 
    title="高亮选中项" 
    :desc="option" 
    @click.native="openSwitch('isVisible')">
</nut-cell>
<nut-actionsheet 
    :is-visible="isVisible"
    @close="closeSwitch('isVisible')" 
    :chooseTagValue="option6"
    :option-list="optionList" 
    @choose="choose"
>
</nut-actionsheet>
```
```javascript
export default {
  data() {
    return {
      option: '',
      isVisible: false,
      optionList: [
        {
          name: '选项A',
          value: 0
        },
        {
          name: '选项B',
          value: 1,
          disable: true
        },
        {
          name: '选项C',
          value: 1
        }
      ]
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    choose(itemParams) {
      this.option = itemParams.name;
    }
  }
};
```



## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| is-visible | 是否可见 | Boolean | false
| is-click-choose-close | 是否点击列表项后立即关闭 | Boolean | true
| is-click-close-mask | 是否点击mask蒙层关闭 | Boolean | true
| isCancelBtn | 是否有确认按钮 | Boolean | false
| isConfirmBtn | 是否有确认按钮 | Boolean | false
| choose-tag-value | 已选值，如果填写，高亮显示 | String | -
| option-list | 列表项 | Array | [ ]
| option-tag | 设置列表项展示使用参数 | String | 'name'

## Slot

| 名称 | 说明 
|----- | ----- 
| title | 自定义标题
| desc | 自定义描述

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| choose | 选择之后触发 | 选中列表项 
| close | 关闭时触发 | 无 
| cancel | 点击取消文案时触发 | 无 