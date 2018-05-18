<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例</h5>
        <p>默认的</p>
        <nut-signature  @confirm="confirm"></nut-signature>
        <div class="demo-show demo1" ref="demo1">!!!确认之后显示base64图片</div>
        <p>修改签字颜色和画笔粗细</p>
        <nut-signature  @confirm="confirm1" :lineWidth="lineWidth" :strokeStyle="strokeStyle"></nut-signature>
        <div class="demo-show demo2" ref="demo2">!!!确认之后显示base64图片</div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            lineWidth: 5,
            strokeStyle: 'pink'
        }
    },
    computed:{

    },
    methods:{
        confirm(canvas, data) {
            console.log(data);
            // 把转的dataURL插入到页面顶部
            let img = document.createElement('img');
            img.src = data;
            document.querySelector('.demo1').appendChild(img);
        },

        confirm1(canvas, data) {
            // 把转的dataURL插入到页面顶部
            let img = document.createElement('img');
            img.src = data;
            document.querySelector('.demo2').appendChild(img);
        }
    }
}
</script>

<style lang="scss">
.nut-signature{
    .nut-signature-inner{
        height: 3rem;
        margin-bottom: 0.1rem;
        border: 1px solid #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nut-signature-unsopport{
        font-size: 0.24rem;
    }
    button{
        color: #FFF;
        background-color: #33C3F0;
        border-color: #33C3F0;
        border: none;
        outline: 0;
        padding: 0.1rem 0.1rem;
        border-radius: 0.05rem;
    }
}
.demo-show{
    padding-top: 0.22rem;
    color: #33C3F0;
}
</style>
