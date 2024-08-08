<template>
  <view class="container">
    <view style="display: flex;">
      <view v-if="true" class="left-item" style="width: 50%;">
        <nut-swiper
          :init-page="0"
          :auto-play="3000"
          pagination-visible
          pagination-color="#426543"
          pagination-unselected-color="#808080">
          <nut-swiper-item v-for="(item, index) in images" :key="index" style="height: 150px;" @tap="handleWelfareActItem(item)">
            <img :src="item" style="width: 100%; height: 100%;" alt="" object-fit="cover" />
          </nut-swiper-item>
        </nut-swiper>
      </view>
      <view class="right-item" style="background-color: yellow; width: calc(50%); height: 150px;">
      </view>
    </view>
  </view>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      images: [
        'https://syyy-data-oss.s3.cn-north-1.jdcloud-oss.com/amipro/miniprogram/refactor_v1/home/home_fission_entrygroup.png',
        'https://syyy-data-oss.s3.cn-north-1.jdcloud-oss.com/amipro/miniprogram/refactor_v1/home/home_fission_entrygroup.png',
        'https://syyy-data-oss.s3.cn-north-1.jdcloud-oss.com/amipro/miniprogram/refactor_v1/home/home_fission_entrygroup.png'
      ]
    }
  },
  mounted() {

  },
  methods: {
    handleWelfareActItem(type) {
      console.log(type)
    }
  }
}
</script>

<style lang="scss">

</style>
