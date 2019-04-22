<template>
  <div class="textinput-demo">
    <h4>基本用法</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-textinput v-model="val" label="基本用法：" placeholder="请输入内容" />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">Value值： {{val}}</span>
      </nut-cell>
    </div>
    <h4>配置</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-textinput :clearBtn="false" v-model="val2" label="无清空按钮：" placeholder="请输入内容" />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-textinput :disabled="true" label="禁用状态：" placeholder="请输入内容" />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-textinput placeholder="请输入密码" v-model="val3" label="密码框：" type="password" />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-textinput placeholder="请输入内容" v-model="val4" label="无边框：" :hasBorder="false" />
        </span>
      </nut-cell>
    </div>
    <h4>使用input原生属性</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-textinput
            placeholder="maxlength=5"
            maxlength="5"
            label="限制文字数："
            :outline="false"
            :hasBorder="false"
          />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-textinput placeholder="请输入内容" v-model="val5" readonly label="只读：" :outline="false" />
        </span>
      </nut-cell>
    </div>
    <h4>使用input原生事件</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-textinput
            placeholder="请输入内容"
            label="focus/blur事件："
            @focus="onFocus"
            @blur="onBlur"
            v-model="val6"
            :hasBorder="false"
          />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">事件触发结果：{{result}}</span>
      </nut-cell>
    </div>
    <h4>自定义Class</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-textinput class="my-input" v-model="val7" placeholder="请输入搜索内容" />
        </span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      val2: "",
      val3: "",
      val4: "",
      val5: "我使用了readonly原生属性",
      val6: "",
      val7: "",
      result: "尚未触发"
    };
  },
  methods: {
    onFocus() {
      this.result = "focus事件触发！";
    },
    onBlur() {
      this.result = "blur事件触发！";
    }
  }
};
</script>

<style lang="scss">
.textinput-demo {
  padding-left: 0;
  padding-right: 0;
}
.textinput-demo h4 {
  padding: 0 10px;
}

.nut-textinput {
  &.my-input {
    input {
      height: 36px;
      border-radius: 20px;
      padding-left: 40px;
      padding-right: 40px;
      background: url("data:image/svg+xml, %3Csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M15.8 14.3l-3.3-3.1c1-1.1 1.6-2.6 1.6-4.1 0-3.6-3.1-6.6-7-6.6s-7 3-7 6.6c0 3.6 3.1 6.6 7 6.6 1.7 0 3.2-.6 4.4-1.5l3.3 3.1c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.7 0-1zM1.5 7.1c0-2.9 2.5-5.2 5.6-5.2 3.1 0 5.6 2.3 5.6 5.2 0 2.9-2.5 5.2-5.6 5.2-3.2 0-5.6-2.3-5.6-5.2z' fill-rule='evenodd' clip-rule='evenodd' fill='%23999999'/%3E%3C/svg%3E")
        no-repeat 10px center;
      background-size: 18px;
    }
    .nut-textinput-clear {
      right: 15px;
    }
  }
}
</style>