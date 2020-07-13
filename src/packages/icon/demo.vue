<template>
  <div class="demo-list">
    <h4>所有ICON，单击可复制</h4>
    <table>
      <tr>
        <td class="copy-box"><nut-icon type="top"></nut-icon><span>top</span></td>
        <td class="copy-box"><nut-icon type="down"></nut-icon><span>down</span></td>
        <td class="copy-box"><nut-icon type="right"></nut-icon><span>right</span></td>
        <td class="copy-box"><nut-icon type="action"></nut-icon><span>action</span></td>
      </tr>
      <tr>
        <td class="copy-box"><nut-icon type="more"></nut-icon><span>more</span></td>
        <td class="copy-box"><nut-icon type="trolley"></nut-icon><span>trolley</span></td>
        <td class="copy-box"><nut-icon type="search"></nut-icon><span>search</span></td>
        <td class="copy-box"><nut-icon type="tick"></nut-icon><span>tick</span></td>
      </tr>
      <tr>
        <td class="copy-box"><nut-icon type="plus"></nut-icon><span>plus</span></td>
        <td class="copy-box"><nut-icon type="minus"></nut-icon><span>minus</span></td>
        <td class="copy-box"><nut-icon type="cross"></nut-icon><span>cross</span></td>
        <td class="copy-box"><nut-icon type="circle-cross"></nut-icon><span>circle-cross</span></td>
      </tr>
    </table>

    <h4>自定义尺寸</h4>
    <table>
      <tr>
        <td class="copy-box-size"><nut-icon type="more" size="40px"></nut-icon><span>more</span></td>
        <td class="copy-box-size"><nut-icon type="trolley" size="40px"></nut-icon><span>trolley</span></td>
        <td class="copy-box-size"><nut-icon type="search" size="40px"></nut-icon><span>search</span></td>
        <td class="copy-box-size"><nut-icon type="tick" size="40px"></nut-icon><span>tick</span></td>
      </tr>
    </table>

    <h4>自定义颜色</h4>
    <table>
      <tr>
        <td class="copy-box-color"><nut-icon type="more" color="#f0250f"></nut-icon><span>more</span></td>
        <td class="copy-box-color"><nut-icon type="trolley" color="#f0250f"></nut-icon><span>trolley</span></td>
        <td class="copy-box-color"><nut-icon type="search" color="#f0250f"></nut-icon><span>search</span></td>
        <td class="copy-box-color"><nut-icon type="tick" color="#f0250f"></nut-icon><span>tick</span></td>
      </tr>
    </table>

    <h4>自定义图标</h4>
    <table>
      <tr>
        <td class="copy-box-self"><nut-icon type="self" :url="require('../../assets/svg/down.svg')"></nut-icon><span>down</span></td>
        <td class="copy-box-self"><nut-icon type="self" :url="require('../../assets/svg/more.svg')"></nut-icon><span>more</span></td>
        <td class="copy-box-self"><nut-icon type="self" :url="require('../../assets/svg/tick.svg')"></nut-icon><span>tick</span></td>
        <td class="copy-box-self"><nut-icon type="self" :url="require('../../assets/svg/trolley.svg')"></nut-icon><span>trolley</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
import copy from 'clipboard';
export default {
  mounted() {
    let copys = new copy('.copy-box', {
      text: function(trigger) {
        return `<nut-icon type="${trigger.textContent}"></nut-icon>`;
      }
    });
    copys.on('success', e => {
      this.tip();
    });

    let copySize = new copy('.copy-box-size', {
      text: function(trigger) {
        return `<nut-icon type="${trigger.textContent}" size="40px"></nut-icon>`;
      }
    });
    copySize.on('success', e => {
      this.tip();
    });

    let copyColor = new copy('.copy-box-color', {
      text: function(trigger) {
        return `<nut-icon type="${trigger.textContent}" color="#f0250f"></nut-icon>`;
      }
    });
    copyColor.on('success', e => {
      this.tip();
    });
    let copySelf = new copy('.copy-box-self', {
      text: function(trigger) {
        return `<nut-icon type="self" :url="require('../../assets/svg/${trigger.textContent}.svg')"></nut-icon>`;
      }
    });
    copySelf.on('success', e => {
      this.tip();
    });
  },
  methods: {
    tip() {
      this.$toast.success('复制成功', { duration: 1000 });
    }
  }
};
</script>

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  td {
    width: 25%;
    text-align: center;
    vertical-align: middle;
    height: 100px;
    border: 1px solid #ebebeb;
    font-size: 12px;
    &:hover {
      background: #f2f2f2;
      cursor: pointer;
    }
  }
  span {
    display: block;
  }
}
</style>
