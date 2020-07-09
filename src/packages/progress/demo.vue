<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="30" />
        </span>
      </nut-cell>
    </div>

    <p>线形进度条-设置颜色高度</p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="30" stroke-color="pink" stroke-width="20" text-color="red" />
        </span>
      </nut-cell>
    </div>
    <p>线形进度条-百分比不显示</p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="50" :show-text="false" stroke-height="24" />
        </span>
      </nut-cell>
    </div>
    <p>线形进度条-百分比外显</p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="30" />
        </span>
      </nut-cell>
    </div>
    <p>线形进度条-百分比内显</p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="60" :text-inside="true" />
        </span>
      </nut-cell>
    </div>
    <p>线形进度条-自定义尺寸(内置"small","base","large"三种规格)</p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="30" :text-inside="true" :size="size">
            <slot>
              <span>small</span>
            </slot>
          </nut-progress>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="50" :text-inside="true" size="base">
            <slot>
              <span>base</span>
            </slot>
          </nut-progress>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="70" :text-inside="true" size="large">
            <slot>
              <span>large</span>
            </slot>
          </nut-progress>
        </span>
      </nut-cell>
    </div>
    <p>线形进度条-状态显示</p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="30" stroke-color="#1890ff" status="active" />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="50" :stroke-width="strokeWidth" status="wrong" />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-progress percentage="100" stroke-color="#1890ff" stroke-width="15" status="success" />
        </span>
      </nut-cell>
    </div>
    <h4>设置百分比</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-progress size="small" :percentage="val" />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-button type="default" shape="circle" @click="setReduceVal" small>减少</nut-button>
          <nut-button type="red" shape="circle" @click="setAddVal" small>增加</nut-button>
        </span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 0,
      strokeWidth: 15,
      size: 'small'
    };
  },
  methods: {
    setAddVal() {
      if (this.val >= 100) {
        return false;
      }
      this.val += 10;
    },
    setReduceVal() {
      if (this.val <= 0) {
        return false;
      }
      this.val -= 10;
    }
  }
};
</script>

<style lang="scss" scoped></style>
