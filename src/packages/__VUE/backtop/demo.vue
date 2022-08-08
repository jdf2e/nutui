<template>
  <div class="demo" id="elId">
    <h2>{{ translate('title') }}</h2>
    <div class="text-data">{{ translate('content') }}1</div>
    <div class="text-data">{{ translate('content') }}2</div>
    <div class="text-data">{{ translate('content') }}3</div>
    <div class="text-data">{{ translate('content') }}4</div>
    <div class="text-data">{{ translate('content') }}5</div>
    <div class="text-data">{{ translate('content') }}6</div>
    <div class="text-data">{{ translate('content') }}7</div>
    <div class="text-data">{{ translate('content') }}8</div>
    <div class="text-data">{{ translate('content') }}9</div>
    <div class="text-data">{{ translate('content') }}10</div>
    <div class="text-data">{{ translate('content') }}11</div>
    <div class="text-data">{{ translate('content') }}12</div>
    <div class="text-data">{{ translate('content') }}13</div>
    <div class="text-data">{{ translate('content') }}14</div>
    <div class="text-data">{{ translate('content') }}15</div>
    <div class="text-data">{{ translate('content') }}16</div>
    <div class="text-data">{{ translate('content') }}17</div>
    <div class="text-data">{{ translate('content') }}18</div>
    <div class="text-data">{{ translate('content') }}19</div>
    <div class="text-data">{{ translate('content') }}20</div>
    <div class="text-data">{{ translate('content') }}21</div>
    <div class="text-data">{{ translate('content') }}22</div>
    <div class="text-data">{{ translate('content') }}23</div>
    <div class="text-data">{{ translate('content') }}24</div>
    <nut-backtop @click="handleClick" el-id="elId" :distance="100" :bottom="110">
      <view class="backtop-demo">
        <nut-icon size="12px" class="nut-backtop-main" name="top"></nut-icon
        ><view class="title">{{ translate('backText') }}</view>
      </view>
    </nut-backtop>
    <nut-backtop @click="handleClick" el-id="elId" :distance="200" :bottom="50"></nut-backtop>
  </div>
</template>

<script>
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('backtop');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': { title: '基本用法', clg: '触发返回顶部', content: '我是测试数据', backText: '顶部' },
    'en-US': { title: 'Basic Usage', clg: 'backtop', content: 'test data', backText: 'Top' }
  });
export default createDemo({
  setup(props, { emit }) {
    initTranslate();
    const handleClick = () => {
      console.log(translate('clg'));
    };

    return {
      handleClick,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  .text-data {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 20px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    height: 46px;
    background: rgba(255, 255, 255, 1);
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    line-height: 19px;
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
  }
  .backtop-demo {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 12px;
    }
  }
}
</style>
