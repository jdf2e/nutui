<template>
    <span class="nut-formatdatetime">{{newDateTime}}</span>
</template>
<script>
export default {
    name:'nut-formatdatetime',
    props: {
    	datetime: {
            type: [Number,String],
            default: ''
        },
    	dateformat: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            newDateTime:''
        }
    },
    created(){
        this.formatTime();
    },
    methods:{
        formatTime(){

            let sUserAgent = navigator.userAgent.toLowerCase();
            let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            let time = null;
            if(!/^\d+$/.test(this.datetime)){
                if(bIsIphoneOs){
                    time = new Date(this.datetime.replace(/\s/, 'T'));
                }else{
                    time = new Date(this.datetime);
                }
            }else{
                time = new Date(parseInt(this.datetime));
            }
            let o = { 
                "m+" : time.getMonth()+1, 
                "d+" : time.getDate(),
                "h+" : time.getHours(),
                "i+" : time.getMinutes(), 
                "s+" : time.getSeconds()
            } 

            if(/(y+)/.test(this.dateformat)) { 
                this.newtime = this.dateformat.replace(RegExp.$1, (time.getFullYear()+"").substr(4 - RegExp.$1.length)); 
            } else{
                this.newtime = this.dateformat;
            }
            for(let k in o) { 
                if(new RegExp("("+ k +")").test(this.newtime)) { 
                    this.newtime = this.newtime.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
                } 
            } 
            this.newDateTime = this.newtime; 
        }
    }
}
</script>
<style lang="scss">
</style>