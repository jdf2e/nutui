<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showDialog1"
        title="自定义标题和内容"
      >
      </nut-cell>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showDialog2"
        title="只有标题"
      >
      </nut-cell>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showDialog3"
        title="只有内容"
      >
      </nut-cell>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showDialog4"
        title="移除按钮栏"
      >
      </nut-cell>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showDialog5"
        title="事件"
      >
      </nut-cell>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showDialog6"
        title="无弹出动效且关闭时不销毁dislog实例"
      >
      </nut-cell>

      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showDialog7"
        title="遮罩层透明"
      >
      </nut-cell>
    </div>
    <h4>图片弹窗</h4>
    <p>
      type值为“image”时为图片弹窗，需要配置一张图片，可带链接（非必须）。默认展示关闭按钮。点击图片触发onClickImageLink事件，返回false可阻止默认的跳转链接行为。
    </p>
    <div>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showImageDialog"
        title="图片弹窗"
      >
      </nut-cell>
    </div>
    <h4>背景滚动锁定</h4>
    <p
      >lockBgScroll值设为true时，可在弹窗出现时锁定页面滚动，且不影响窗体内部滚动。</p
    >
    <div>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showDialog8"
        title="背景滚动锁定"
      >
      </nut-cell>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="showDialog9"
        title="窗体内部滚动不影响页面滚动"
      >
      </nut-cell>
    </div>
    <h4>高级用法</h4>
    <p>如果Dialog内容有复杂交互，可使用Dialog的标签式用法。</p>
    <div>
      <nut-cell
        :is-link="true"
        :show-icon="true"
        @click="dialogShow = true"
        title="以标签形式调用Dialog"
      >
      </nut-cell>
    </div>
    <!-- 以标签形式调用Dialog -->
    <nut-dialog
      title="标签形式调用"
      :visible="dialogShow"
      :cancel-auto-close="false"
      @ok-btn-click="dialogShow = false"
      @cancel-btn-click="dialogShow = false"
      @close="dialogShow = false"
    >
      <a href="javascript:;" @click="dialogShow = false" :noCancelBtn="true"
        >点我可以直接关闭对话框</a
      >
    </nut-dialog>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, createApp } from 'vue';
import { createComponent } from '@/utils/create';
import Dialog from './index';
// 全局注册
const app = createApp({});
app.use(Dialog);
const { createDemo } = createComponent('dialog');
export default createDemo({
  props: {},

  setup() {
    const data = reactive({
      dialogShow: false,
      isEditor: false,
      item: {}
    });

    function showDialog1() {
      const options = {
        title: '确定删除此订单？',
        content: '删除后将从你的记录里消失，无法找回',
        closeOnPopstate: true
      };

      Dialog(options);
    }
    function showDialog2() {
      const options = {
        title: '确定要加入购物车吗？'
      };

      Dialog(options);
    }
    function showDialog3() {
      const options = {
        content: '点击返回将中断注册，确定返回？<br>删除后您可以在回收站还原。',
        closeBtn: true,
        noOkBtn: true,
        cancelBtnTxt: '我知道了'
      };

      Dialog(options);
    }
    function showDialog4() {
      const options = {
        customClass: 'my-dialog',
        title: '注册说明',
        content:
          '原账号为您本人所有，建议直接登录或找回密码。原账号内的订单资产可能丢失，可联系京东客服找回。',
        closeBtn: true,
        noFooter: true
      };

      Dialog(options);
    }
    function showDialog5() {
      const options = {
        okBtnTxt: '好 的',
        title: '事件',
        content: '点击按钮触发事件',
        closeBtn: true,
        onOkBtn(event) {
          alert('okBtn');
          Dialog.close(); //关闭对话框
        },
        onCancelBtn(event) {
          alert('cancelBtn');
          //return false;  //阻止默认“关闭对话框”的行为
        },
        onCloseBtn(event) {
          alert('closeBtn');
          //return false;  //阻止默认“关闭对话框”的行为
        },
        closeCallback(target) {
          alert('will close');
        }
      };

      Dialog(options);
    }
    function showDialog6() {
      Dialog({
        animation: false, //禁用弹出动效
        title: '注册说明',
        canDestroy: false,
        content:
          '原账号为您本人所有，建议直接登录或找回密码。原账号内的订单资产可能丢失，可联系京东客服找回。'
      });
    }
    function showDialog7() {
      Dialog({
        maskBgStyle: 'rgba(0,0,0,0)', //设置遮罩层背景透明
        title: '注册说明',
        content:
          '原账号为您本人所有，建议直接登录或找回密码。原账号内的订单资产可能丢失，可联系京东客服找回。'
      });
    }
    function showDialog8() {
      Dialog({
        title: '背景滚动锁定',
        lockBgScroll: true,
        content:
          '弹窗弹出后，页面滚动锁止。在窗体和遮罩层上滑动时，页面不再跟随滚动。',
        noOkBtn: true,
        cancelBtnTxt: '我知道了',
        onCancelBtn() {
          Dialog.close();
        }
      });
    }
    function showDialog9() {
      Dialog({
        title: '《桃花行》',
        lockBgScroll: true,
        content:
          '桃花帘外东风软，<br>桃花帘内晨妆懒。<br>帘外桃花帘内人，<br>人与桃花隔不远。<br>东风有意揭帘栊，<br>花欲窥人帘不卷。<br>桃花帘外开仍旧，<br>帘中人比桃花瘦。<br>花解怜人花也愁，<br>隔帘消息风吹透。<br>风透帘栊花满庭，<br>庭前春色倍伤情。<br>闲苔院落帘空卷，<br>斜日栏干人自凭。<br>凭栏人向东风泣，<br>茜裙偷傍桃花立。<br>桃花桃叶乱纷纷，<br>花绽新红叶凝碧。<br>树树烟封一万株，<br>烘照楼台红模糊。<br>天机烧破鸳鸯锦，<br>春色欲酣珊瑚枕。<br>侍女金盆进水来，<br>香泉欲蘸胭脂冷。<br>胭脂鲜艳何相类，<br>花之颜色人之泪。<br>若将人泪比桃花，<br>泪自长流花自媚。<br>泪眼看花泪易乾，<br>泪乾春尽花憔悴。<br>憔悴花枝憔悴人，<br>花飞人倦易黄昏。<br>一声杜宇春归尽，<br>寂寞帘栊空月痕。',
        noOkBtn: true,
        cancelBtnTxt: '我知道了'
      });
    }
    function showImageDialog() {
      Dialog({
        type: 'image',
        link: 'http://m.jd.com',
        imgSrc:
          'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/4875/23/1968/285655/5b9549eeE4997a18c/070eaf5bddf26be8.jpg!q80.dpg',
        onClickImageLink() {
          return false; //返回false可阻止默认的链接跳转行为
        }
      });
    }

    return {
      ...toRefs(data),
      showDialog1,
      showDialog2,
      showDialog3,
      showDialog4,
      showDialog5,
      showDialog6,
      showDialog7,
      showDialog8,
      showDialog9,
      showImageDialog
    };
  }
});
</script>
<style lang="scss">
.demo-list {
  padding-top: 100px;
  h4 {
    font-size: 15px;
    padding: 0 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  p {
    font-size: 12px;
    padding: 0 16px;
    margin: 5px 0;
  }
}
</style>
