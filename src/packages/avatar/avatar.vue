<template>
    <div class="nut-avatar" :style="styles">
        <i class="icon" :style="iconStyles"></i>
        <span class="text"><slot></slot></span>
        <b class="dot" v-if="dot>0">{{dot}}</b>
    </div>
</template>
<script>
export default {
    name:'nut-avatar',
    props: {
        size:{
            type:Number,
            default:40
        },
        shape:{
            type:String,
            default:''
        },
        bgColor:{
            type:String,
            default:'#eee'
        },
        bgIcon:{
            type:String,
            default:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAASFBMVEUAAAAXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEdRCe4GAAAAF3RSTlMACSW88uTcQKeYWB7YOTB/xXdlkHFLzVTLks0AAAD+SURBVDjLjZILjoMwDAXzD5Q/LZ3733STbpYskoM6EkhBw7MdWV2JfYDQR9XGWArWtJzoOHGxkZOd56T11GdLzlrBz+rD7GEViwHJKRYgFexTrXp6Qi9IAaZ6miAIEqDrSQOC5L6Rxtp3YpbLdbDU0wKdID3A67Oah4cgpe916r78IUSdBRdKkNgV66H1sSJ3NGzW8x832s1clQ6RbqjO4Wjgzs5eJOxu9GVYs1sSrzrVGMXtGf+mHBxYrUS0BTf8Dj4mp2GNn8sYqHskMAGD2sCqGyxs+bXfSXsO8WDuJAO+bK1IXdH83FKkYHJsoIl6l6tf2s5bxVCSfMsJ8QdwfR4F9ZQcyQAAAABJRU5ErkJggg=='
        },
        dot:{
            type:Number,
            default:0
        },
        bgImage:{
            type:String,
            default:''
        }
    },
    computed:{
        styles:function(){
            return {
                'width':this.size+'px',
                'height':this.size+'px',
                'borderRadius':this.shape ==='square'?'':'50%',
                'backgroundColor':this.bgColor,
                'backgroundImage':'url('+this.bgImage+')'
            }
        },
        iconStyles:function(){
            return {
                'backgroundImage': 'url('+this.bgIcon+')'
            }
        }
    },
    data() {
        return {};
    },
    methods: {
    }
}
</script>