<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <div class="cell-box">
      <nut-cell title="列表内容A" to="/index"></nut-cell>
      <nut-cell title="列表内容B" @click-cell="clickEvnt"></nut-cell>
      <nut-cell title="列表内容C" @click-cell="clickEvnt"></nut-cell>
    </div>
    <h4>带箭头的样式</h4>
    <div class="cell-box">
      <nut-cell title="列表内容A" :is-link="true" link-url="//m.jd.com" :show-icon="true" target="_target"> </nut-cell>
      <nut-cell title="列表内容B" :is-link="true" link-url="//m.jd.com" :show-icon="true" target="_target"></nut-cell>
      <nut-cell title="列表内容C" :is-link="true" link-url="//m.jd.com" :show-icon="true" target="_target"></nut-cell>
    </div>
    <h4>带解释说明的样式</h4>
    <div class="cell-box">
      <nut-cell :is-link="true">
        <template slot="title">列表标题</template>
        <template slot="sub-title">这里是对标题的解释说明1</template>
      </nut-cell>
    </div>
    <h4>菜单列表</h4>
    <div class="cell-box">
      <nut-cell :show-icon="true" title="我的主页" @click-cell="clickEvnt">
        <template slot="avatar">
          <img width="24" height="24" class="avatar-img" src="../../assets/img/ic_me.png" />
        </template>
      </nut-cell>
      <nut-cell :show-icon="true" title="店铺定位" desc="查看店铺" @click-cell="clickEvnt">
        <template slot="avatar">
          <img width="24" height="24" class="avatar-img" src="../../assets/img/ic_location.png" />
        </template>
      </nut-cell>
      <nut-cell :show-icon="true" title="我的收藏" @click-cell="clickEvnt">
        <template slot="avatar">
          <img width="24" height="24" class="avatar-img" src="../../assets/img/ic_collect.png" />
        </template>
      </nut-cell>
      <nut-cell :show-icon="true" title="设置" desc="版本升级" @click-cell="clickEvnt">
        <template slot="avatar">
          <img width="24" height="24" class="avatar-img" src="../../assets/img/ic_set.png" />
        </template>
      </nut-cell>
    </div>
    <h4>消息列表</h4>
    <div class="cell-box">
      <nut-cell title="噜啦噜" sub-title="我又来送福利啦！关注之后你就会">
        <template slot="avatar"
          ><nut-avatar
            sizeNum="60"
            bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"
            bg-icon
          ></nut-avatar
        ></template>
        <template slot="desc">
          <p class="timer">10:12</p>
          <p class="badge"><nut-badge :value="9" :max="99" top="0px" right="15px"></nut-badge></p>
        </template>
      </nut-cell>
      <nut-cell title="噜啦噜" sub-title="我又来送福利啦！关注之后你就会">
        <template slot="avatar"
          ><nut-avatar
            sizeNum="60"
            bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"
            bg-icon
          ></nut-avatar
        ></template>
        <template slot="desc">
          <p class="timer">1小时前</p>
          <p class="badge"><nut-badge :is-dot="true" :max="99" top="0px" right="10px"></nut-badge></p>
        </template>
      </nut-cell>
      <nut-cell title="噜啦噜" sub-title="我又来送福利啦！关注之后你就会">
        <template slot="avatar"
          ><nut-avatar
            sizeNum="60"
            bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"
            bg-icon
          ></nut-avatar
        ></template>
        <template slot="desc">
          <p class="timer">星期五</p>
          <p class="badge"><nut-badge :value="100" :max="99" top="0px" right="30px"></nut-badge></p>
        </template>
      </nut-cell>
    </div>
  </div>
</template>

<script>
import locale from '../../mixins/locale';
import { locale as i18n } from '../../locales';
import Icon from '../icon/icon.vue';
import Avatar from '../avatar/avatar.vue';
import Badge from '../badge/badge.vue';

export default {
  mixins: [locale],
  components: {
    'nut-icon': Icon,
    'nut-avatar': Avatar,
    'nut-badge': Badge,
  },
  data() {
    return {};
  },
  methods: {
    clickEvnt() {
      console.log('click cell');
    },
  },
  mounted() {},
};
</script>
