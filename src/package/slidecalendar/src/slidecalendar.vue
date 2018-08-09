<template>
    <div class="nut-slidecalendar">
        <input class="item-inp" v-model="time"  readonly :id="id"  :data-lcalendar="data" type="text" placeholder="请选择日期">
    </div>
</template>
<script>
import lCalendar from './slidecalendar.js';
export default {
    name:'nut-slidecalendar',
    props: {
        "data":{
            type: String,
            default: '2018-04-12,2019-05-12'        
        },
        
        "type":{
            type:String,
            default:'date' //datetime  time
        },
        'id':{
            'type':String,
            default:'calendar'
        }
    },
    data() {
        return {
            "time":null
        };
    },
    mounted(){
        this.initCal()
    },
    watch:{
        time(val){
            console.log(val);
            this.$emit('confirm',val);
        }
    },
    methods: {
        initCal(){
            let that = this;
            var calendar = new lCalendar()
             //let calendar = new cal();
            
			calendar.init({
				'trigger':'#'+that.id,
				'type': that.type
			});
        }
    }
}
</script>
<style lang="scss">
.gearDate,
.gearDatetime,
.gearTime {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9900;
    overflow: hidden;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.date_ctrl {
    vertical-align: middle;
    background-color: white;
    color: #363837;
    margin: 0;
    height: auto;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9901;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.slideInUp {
    animation: slideInUp .3s ease-in;
    -webkit-animation: slideInUp .3s ease-in
}

@-webkit-keyframes slideInUp {
    from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

.date_roll,
.datetime_roll,
.time_roll {
    display: -webkit-box;
    width: 100%;
    height: auto;
    overflow: hidden;
    font-weight: bold;
    background-color: transparent;
    -webkit-mask: -webkit-gradient(linear, 0% 50%, 0% 100%, from(#debb47), to(rgba(36, 142, 36, 0)));
    -webkit-mask: -webkit-linear-gradient(top, #debb47 50%, rgba(36, 142, 36, 0))
}

.date_roll>div,
.datetime_roll>div,
.time_roll>div {
    font-size: 2.3em;
    height: 6em;
    float: left;
    background-color: transparent;
    position: relative;
    overflow: hidden;
    -webkit-box-flex: 4
}

.date_roll_mask {
    -webkit-mask: -webkit-gradient(linear, 0% 40%, 0% 0%, from(#debb47), to(rgba(36, 142, 36, 0)));
    -webkit-mask: -webkit-linear-gradient(bottom, #debb47 50%, rgba(36, 142, 36, 0));
    padding: 0 0 3em 0
}

.date_roll>div:nth-child(2) {
    -webkit-box-flex: 2
}

.date_roll>div:nth-child(1),
.datetime_roll>div:nth-child(1) {
    -webkit-box-flex: 4
}

.datetime_roll>div:first-child {
    -webkit-box-flex: 6
}

.datetime_roll>div:last-child {
    -webkit-box-flex: 6
}

.date_grid {
    position: relative;
    top: 2em;
    width: 100%;
    height: 2em;
    margin: 0;
    box-sizing: border-box;
    z-index: 0;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6
}

.date_grid>div {
    color: #000;
    position: absolute;
    right: 0;
    top: 0;
    font-size: .8em;
    line-height: 2.5em
}

.date_roll>div:nth-child(3) .date_grid>div {
    left: 42%
}

.datetime_roll>div .date_grid>div {
    right: 0
}

.datetime_roll>div:first-child .date_grid>div {
    left: auto;
    right: 0%
}

.datetime_roll>div:last-child .date_grid>div {
    left: 50%
}

.time_roll>div:nth-child(1) .date_grid>div {
    right: 0.5em;
    /*border: 1px solid red;*/
}

.time_roll>div .date_grid {
    /*border: 1px solid black;*/
}

.time_roll>div .date_grid>div {
    right: 1em;
    /*border: 1px solid blue;*/
}

.date_btn {
    color: #000;
    font-size: 1.6em;
    line-height: 1em;
    text-align: center;
    padding: .8em 1em;
    cursor: pointer
}

.date_btn_box {
    display: -webkit-box;
    -webkit-box-pack: justify;
    -webkit-box-align: stretch
}

.gear {
    float: left;
    position: absolute;
    z-index: 9902;
    width: 5.5em;
    margin-top: -6em
}

.date_roll>div .gear {
    width: 100%
}

.date_roll>div:nth-child(1) .gear {
    text-indent: 20%
}

.date_roll>div:nth-child(2) .gear {
    text-indent: -20%
}

.date_roll>div:nth-child(3) .gear {
    text-indent: -55%
}

.datetime_roll>div .gear {
    width: 100%;
    text-indent: -25%
}

.datetime_roll>div:first-child .gear {
    text-indent: -10%
}

.datetime_roll>div:last-child .gear {
    text-indent: -50%
}

.time_roll>div .gear {
    width: 100%;
    /*text-indent: -70%;*/
    text-align: center;
}

.time_roll>div:nth-child(1) .gear {
    width: 100%;
    text-indent: 10%
}

.tooth {
    height: 2em;
    font-weight: normal;
    line-height: 2em;
    text-align: center
}
</style>