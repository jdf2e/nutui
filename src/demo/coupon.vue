<template>
    <div>
          <h1>Coupon</h1>
        <p>一种支持自定义的优惠券展示（京券、东券、运费券、不可用券）</p>
        <h5>示例</h5>
        <p>优惠券展示：京券</p>
        <nut-coupon :datas="beanData[0]" @immediate-use="immediateUse"></nut-coupon>
        <p>优惠券展示：东券</p>
        <nut-coupon :datas="beanData[1]" @immediate-use="immediateUse"></nut-coupon>
        <p>优惠券展示：运费券</p>
        <nut-coupon :datas="beanData[2]" @immediate-use="immediateUse"></nut-coupon>
        <p>优惠券展示：不可用券</p>
        <nut-coupon :datas="beanData[3]" @immediate-use="immediateUse"></nut-coupon>
        <p>切换状态</p>
        <nut-coupon :datas="beanData[0]" :is-switch="true" @switch-use="switchUse"></nut-coupon>
        <br>
        <nut-coupon :datas="beanData[3]" :is-switch="true" @switch-use="switchUse"></nut-coupon>
        <p>有活动角标</p>
        <nut-coupon :datas="beanData[0]" :is-switch="true" @switch-use="switchUse" :is-badge="true"></nut-coupon>
    </div>
</template>
<script>
export default {
    data(){
        return{
          beanData: [
              {
                  'id': 1,
                  'discount': 100,
                  'quota': 400,
                  'couponType': 0,
                  'couponLimitInfo': '限自营好丽友商品',
                  'beginTime': '2015.07.07',
                  'endTime': '2015.07.07',
                  'isUsed': true
              },
              {
                  'id': 2,
                  'discount': 10,
                  'quota': 60,
                  'couponType': 1,
                  'couponLimitInfo': '限自营盼盼品牌部分饼干类商品',
                  'beginTime': '2015.07.07',
                  'endTime': '2015.07.07',
                  'isUsed': true
              },
              {
                  'id': 3,
                  'discount': 10,
                  'quota': 400,
                  'couponType': 2,
                  'couponLimitInfo': '限自营好丽友、盼盼品牌部分饼干类商品',
                  'beginTime': '2015.07.07',
                  'endTime': '2015.07.07',
                  'isUsed': true
              },
              {
                  'id': 4,
                  'discount': 10,
                  'quota': 400,
                  'couponType': 1,
                  'couponLimitInfo': '限自营好丽友、盼盼品牌部分饼干类商品',
                  'beginTime': '2015.07.07',
                  'endTime': '2015.07.07',
                  'isUsed': false
              }
          ]
        }
    },
    methods:{
        immediateUse(datas){
            console.log('立即使用,数据如下：' + JSON.stringify(datas));
        },
        switchUse(datas, isChecked) {
            console.log('是否选中：' + isChecked);
        }
    }
}
</script>

<style>
    .nut-badge{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABHCAMAAAC51QAPAAAAolBMVEUAAADxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1PxU1P////yY2P+9vb4sbH0gID72tr85OT5xsb97e33paX2mprzcnL1jY35u7v60NCA4MvPAAAAJnRSTlMABfv38RsS2Qnr5qyjdWNNQzUuJw3fzcF/07qaiGvItI9bVTwhlIHj3KYAAAO6SURBVFjDrJbpdtMwFIQphFKgQKEsLfs6d9Nu+f1fjdrJsQxhiQLzJ7ZyzidprnVHtx7fQa/On986XM/udfPvPe3gPz/v5t9+1ME/2KBiy+Pru//fIE9peb7/pMeghwfQgygFXl7fnHVM8O6vBiUaYOLLMnD9rIP/9MWf6SZaMgrVNnTnXQf/9I8GcRzZOzjPwLDs4MNpxwSPbv8eP0YOwlVKGkC6DD+4+C8GqVgiy5RNSEnR9Pakw6APv6YPlIzURDmGLNGw0svLfzWIJdxwJ+9Hn2rxPqsfl383jzv4Xx7s482x9xwiq5Qa4ISkJjQ9PO0w6PU+v9zQlWygAK8qJVHFWi++dGzg6ieDWEXMKCEHGTnRUJKJA4qWpclddVT4Ym2Qc0TVB6tgnbYhWsllGqaCD1j0qqPJ3X2FRdFpgXMAAjnmQCkPJooJr2jafD6cf3KFH1QdkCj5aEgU2I9o+KOa3MV9rKQRRgHT2mFRIvOCT2kvxnoNQnIcowSe157F4EcGDzzX5rgYO3mLlVxki77AoucBSOINMF8avjvGnjSDlCSDR8lFAiaNlCe85NrwvTF29/1ycPPcyZSi5+l9d7A47MpbWsx8PDvcoI9YlMUxnNg2XBxS3m7Lsalff0TXlx0GbVatISrNTI7CCNsNOLqRqxnHxdjXl607jFR3xttskGNUUkepobub3Mm3dllwgA1p3FlhUZQCUNsN4pgY+7wYxEAkonFJYJJtWXwj98fYZTMIOrBT8ExXituFW8ae3n89mH/2BiuFCIrOTUUtWbzh19p8OtygT5t19Ko6Jy4kSihe5qUXxZ46QubyerV8SpgVx/loZYA9jbydnHvwzaDzNb/Ov5UmVuZ5RKLtTlzDH3lTV3IzmHY1TRRgXtK0C9vD99/Uh++1lzkOwzAMBJ9D0jocSfb/vxZEYrJIo4LGdq7G4vIAZr1V6toAKTpjqt+dAD6mMn3emWx+JLoX5TsBfDigKre2Y92d4m0VsfGPjwf0sjOtQu71pWYjIx3gYwGlU8a6FWmaUfl0+vIJBT4ckHoSq60+rs2L2uADrneIZC/KrG/wMddLJtb8R3Xz+pjraRFva5KyyT6oMnOfLsmqZv05Hq6HQGZbi4zNYMZUZkhRn9XN3IcDMvNZ7LgKj/FwvdF+A6QBfECGn+Hhehw8XI+Eh+tx8HA9Dh4qw8HD9Uh4uB4Hj4A4eLgeCQ/X4+Dhehw8XI+Eh+tx8HA9Dh6uR8LD9Th4uB4HD9cj4eF6HDxcj4OH670BF4mZsTPggWgAAAAASUVORK5CYII=);
    }
</style>
