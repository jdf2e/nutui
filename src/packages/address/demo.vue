<template>
  <div class="demo">
    <h2>选择自定义地址</h2>
    <nut-cell
      title="选择地址"
      desc="请选择地址  "
      is-link
      @click="showAddress"
    ></nut-cell>

    <nut-address
      v-model:show="showPopup"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @onChange="onChange1"
      @close="close1"
      customAddressTitle="请选择所在地区"
    ></nut-address>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
import { reactive, ref } from 'vue';
const { createDemo } = createComponent('address');
export default createDemo({
  props: {},
  setup() {
    const showPopup = ref(false);
    const province = ref([
      { id: 1, name: '北京' },
      { id: 2, name: '广西' },
      { id: 3, name: '江西' },
      { id: 4, name: '四川' }
    ]); // 省

    const city = ref([
      { id: 7, name: '朝阳区' },
      { id: 8, name: '崇文区' },
      { id: 9, name: '昌平区' },
      { id: 6, name: '石景山区' }
    ]); // 市

    const country = ref([
      { id: 3, name: '八里庄街道' },
      { id: 9, name: '北苑' },
      { id: 4, name: '常营乡' }
    ]); // 县

    const town = ref([]); // 镇

    const text1 = ref('请选择地址');
    const text2 = ref('请选择地址');
    const text3 = ref('请选择地址');
    const text4 = ref('请选择地址');

    const showAddress = () => {
      showPopup.value = !showPopup.value;
    };

    const onChange1 = cal => {
      console.log('change1', cal);
      if ([cal.next].length < 1) {
        showPopup.value = false;
      }
    };
    const close1 = val => {
      console.log(val);
      text1.value = val.data.addressStr;
    };

    return {
      showAddress,
      province,
      city,
      country,
      town,
      text1,
      showPopup,
      onChange1,
      close1
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
}
</style>
