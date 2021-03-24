# Coupon 优惠券

## 基本用法

```html
<nut-coupon 
  type="1" 
  cText1="每满10减1" 
  cText2="仅可购买京贴测试商品" 
  state="0"
  @click="handleClick()" 
/>
```

## 京贴券

```html
<nut-coupon 
  type="1" 
  cText1="每满10减1" 
  cText2="仅可购买京贴测试商品" 
  state="0"
  @click="handleClick()" 
/>
```

```javascript
export default {
  methods: {
    handleClick() {
      this.$toast.text('很抱歉，没抢到~~');
    }
  }
};
```

## 品类券无图

```html
<nut-coupon 
  type="2" 
  discount="2"
  cText1="满49元可用" 
  cText2="仅可购买年货节头号京贴活动商品" 
  state="0"
  @click="handleClick()" 
/>
```

```javascript
export default {
  methods: {
    handleClick() {
      this.$toast.text('很抱歉，没抢到~~');
    }
  }
};
```

## 品类券有图

```html
<nut-coupon 
  type="2" 
  discount="2"
  cText1="满49元可用" 
  cText2="仅可购买年货节头号京贴活动商品" 
  cImage="http://m.360buyimg.com/babel/s250x250_jfs/t1/137621/21/15770/49049/5fbe0520E043b4ce5/f8a1e0e877908389.jpg"
  state="0"
  @click="handleClick()" 
/>
```
```javascript
export default {
  methods: {
    handleClick() {
      this.$toast.text('很抱歉，没抢到~~');
    }
  }
};
```

### Prop

| 字段              | 说明                                       | 类型    | 默认值   |
| ----------------- | ------------------------------------------ | ------- | -------- |
| type         | 优惠券品类类型                              | String   | 1：普通、2：满减 | 
| discount     | 优惠券品类额度金额                           | String  | -       | 
| cText1       | 优惠券第一行文字                            | String   | -       | 
| cText2       | 优惠券第二行文字                            | String   | -       | 
| cImage       | 优惠券图片                                 | Boolean  | -       | 
| state        | 优惠券状态（0:未领取;  1: 已领取;  2: 已抢光） | Boolean  | 0       |