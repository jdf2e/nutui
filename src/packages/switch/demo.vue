<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-switch :active.sync="swActive"></nut-switch></span>
        <div slot="desc">{{ swActive }}</div>
      </nut-cell>
    </div>

    <h4>自定义尺寸</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-switch :active="true" size="small"></nut-switch></span>
        <div slot="desc">small</div>
      </nut-cell>
      <nut-cell>
        <span slot="title"><nut-switch :active="true" size="base"></nut-switch></span>
        <div slot="desc">base</div>
      </nut-cell>
      <nut-cell>
        <span slot="title"><nut-switch :active="true" size="large"></nut-switch></span>
        <div slot="desc">large</div>
      </nut-cell>
    </div>
    <p>内置"small","base","large"三种规格</p>

    <h4>change事件</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-switch @change="onChange"></nut-switch></span>
      </nut-cell>
    </div>

    <h4>禁用状态</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-switch :disabled="true"></nut-switch></span>
      </nut-cell>
      <nut-cell>
        <span slot="title"><nut-switch :active="true" :disabled="true"></nut-switch></span>
      </nut-cell>
    </div>
    <p>禁用状态下，change事件参数永远为初始值</p>

    <h4>循环场景</h4>
    <div v-for="(item, index) of list" :key="index">
      <nut-cell>
        <span slot="title"> {{ item.name }}</span>
        <span slot="desc"><nut-switch @change="onChangeLabel($event, index)" :active="true"></nut-switch></span>
      </nut-cell>
    </div>
    <h4>自定义Class</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-switch :active="true" class="my-switch"></nut-switch></span>
      </nut-cell>
    </div>
    <h4>内嵌文字标签</h4>
    <div>
      <nut-cell desc="开|关">
        <span slot="title"><nut-switch :active="true" label="开|关"></nut-switch></span>
      </nut-cell>
      <nut-cell desc="ON|OFF">
        <span slot="title"><nut-switch :active="true" label="ON|OFF"></nut-switch></span>
      </nut-cell>
      <nut-cell desc="通 过 | 拒 绝">
        <span slot="title"><nut-switch :active="false" label="通 过|拒 绝"></nut-switch></span>
      </nut-cell>
      <nut-cell desc="large尺寸, 打开的状态|禁用的状态">
        <span slot="title"><nut-switch size="large" :active="false" label="打开的状态|禁用的状态"></nut-switch></span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swActive: true,
      list: [
        { id: '1', name: 'a' },
        { id: '2', name: 'b' },
        { id: '3', name: 'c' }
      ]
    };
  },
  methods: {
    onChange(status) {
      alert(status);
    },
    onChangeLabel(status, index) {
      alert('status:' + status + ',selected:' + index);
    }
  }
};
</script>

<style lang="scss">
.my-switch.nut-switch {
  border-radius: 3px;
  border-color: #ccc;
  background-color: #ccc;
  .nut-switch-btn {
    border: 2px solid #fff;
    box-shadow: none;
    background-color: #fff;
    border-radius: 3px;
  }
  &.nut-switch-active {
    border-color: #0092e6;
    background-color: #0092e6;
    .nut-switch-btn {
      background-color: #fff;
    }
  }
}
</style>
