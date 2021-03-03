<template>
  <div
    :class="['nut-coupon', `nut-coupon-${type}`, cImage == true ? 'nut-coupon-image' : '', `nut-coupon-${['get', 'use', 'ban'][state]}`]"
    @click="clickHandler"
  >
    <div class="nut-coupon-info">
      <div v-if="type == 2 && cImage" class="nut-coupon-imgbox">
        <img class="nut-coupon-img" :src="cImage" />
      </div>
      <div class="nut-coupon-desc">
        <template v-if="type != '1'">
          <template v-if="typeof +discount == 'number' && !isNaN(+discount)">
            <div class="nut-coupon-discount">
              <span class="rmb">&yen;</span>
              {{ discount }}
            </div>
          </template>
          <template v-else>
            <div class="nut-coupon-discount">
              {{ discount }}
            </div>
          </template>
        </template>
        <div class="nut-coupon-quota">{{ cleanZero(cText1) }}</div>
      </div>
    </div>
    <div class="nut-coupon-limitStr">{{ cleanZero(cText2) }}</div>
    <div class="nut-coupon-btn">
      <div v-if="state == 0">立即领取</div>
      <div v-else-if="state == 1">去使用</div>
      <div v-else-if="state == 2">已抢光</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-coupon',
  props: {
    item: {
      type: Object,
      default: null
    },
    type: {
      type: [String, Number],
      default: '1'
    },
    discount: {
      type: [String, Number],
      default: null
    },
    cText1: {
      type: [String, Number],
      default: null
    },
    cText2: {
      type: [String, Number],
      default: null
    },
    cImage: {
      type: [Boolean, String],
      default: false
    },
    state: {
      type: [String, Number],
      default: '0'
    }
  },
  data() {
    return {};
  },
  components: {},
  mounted() {
    // console.log('item', this.item)
  },
  methods: {
    clickHandler(event) {
      this.$emit('click', event);
    },
    cleanZero(value) {
      value = value;
      let res = /\.0+$/.exec(value);
      if (res) {
        return value.slice(0, res.index);
      }
      return value;
    }
  }
};
</script>
