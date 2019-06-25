<template>
    <div :style="styles" :class="['nut-avatar', 'avatar-'+size,'avatar-'+shape]" @click="activeAvatar">
        <i class="icon" :style="iconStyles"></i>
        <span class="text"><slot></slot></span>
    </div>
</template>
<script>
export default {
    name:'nut-avatar',
    props: {
        size:{
            type:String,
            default:'normal'
        },
        shape:{
            type:String,
            default:'round'
        },
        bgColor:{
            type:String,
            default:'#eee'
        },
        bgIcon:{
            type:String,
            default:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAASFBMVEUAAAAXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEdRCe4GAAAAF3RSTlMACSW88uTcQKeYWB7YOTB/xXdlkHFLzVTLks0AAAD+SURBVDjLjZILjoMwDAXzD5Q/LZ3733STbpYskoM6EkhBw7MdWV2JfYDQR9XGWArWtJzoOHGxkZOd56T11GdLzlrBz+rD7GEViwHJKRYgFexTrXp6Qi9IAaZ6miAIEqDrSQOC5L6Rxtp3YpbLdbDU0wKdID3A67Oah4cgpe916r78IUSdBRdKkNgV66H1sSJ3NGzW8x832s1clQ6RbqjO4Wjgzs5eJOxu9GVYs1sSrzrVGMXtGf+mHBxYrUS0BTf8Dj4mp2GNn8sYqHskMAGD2sCqGyxs+bXfSXsO8WDuJAO+bK1IXdH83FKkYHJsoIl6l6tf2s5bxVCSfMsJ8QdwfR4F9ZQcyQAAAABJRU5ErkJggg=='
        },
        bgImage:{
            type:String,
            default:''
        }
    },
    computed:{
        styles(){
            return {
                'background':this.bgColor + ' url('+this.bgImage+')'+'no-repeat',
                'backgroundSize':'100%'
            }
        },
        iconStyles(){
            return {
                'backgroundImage': 'url('+this.bgIcon+')'
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        activeAvatar(){
            this.$emit('activeAvatar');
        }
    }
}
</script>