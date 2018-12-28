<template>
    <div class="nut-price"  v-html="priceShow"><span></span></div>
</template>
<script>
export default {
    name:'nut-price',
    props: {
        'price':{
            type: [Number,String],
            default: 0
        },
        'needSymbol':{
            type: Boolean,
            default: true
        },
        'decimalDigits':{
            type: [Number,String],
            default: 2
        },
        'thousands': {
            type: Boolean,
            default: false
        }
    },
    computed: {
        priceShow() {
            let self = this;
            let symbol = self.needSymbol?'<span class="price-symbol">￥</span>':'';
            return symbol + self.formatToHump(self.price);
        }
    },
    data() {
        return {};
    },
    methods: {
        //判断是否为小数点
        checkPoint(num) {
            return (String(num)).indexOf('.') > 0;
        },

        //将数字转换成驼峰形式
        formatToHump(num) {
            let self = this;
            num = String(num).replace('￥','');
            if(self.checkPoint(num)) {
                let numArray = String(num).split('.');
                return '<span class="price-big">'+self.formatThousands(numArray[0]) +'</span><span class="price-point">.</span><span class="price-small">' + self.formatDecimal(numArray[1]) + '</span>';
            } else {
                return '<span class="price-big">'+ self.formatThousands(num) +'</span><span class="price-point">.</span><span class="price-small">' + self.formatDecimal(0) + '</span>';
            }
        },

        //根据小数位数格式化小数部分
        formatDecimal(decimalNum) {
            let self = this;
            let decimalDigits = self.decimalDigits;
            let result = '0.' + String(decimalNum);
            let resultFixed = (result/1).toFixed(decimalDigits);
            return String(resultFixed).substring(2,resultFixed.length);
        },
        //千分位显示
        formatThousands(num) {
            let self = this;
            let result = '';
            // let 
            if(self.thousands) {
                return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
            } else {
                return num;
            }
        }
    }
}
</script>