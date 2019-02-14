<template>
  <span class="nut-cd-timer">
    <template v-if="showPlainText">
      <span class="nut-cd-block">{{plainText}}</span>
    </template>
    <template v-else>
      <template v-if="resttime.d > 0">
        <span class="nut-cd-block">{{resttime.d}}</span>
        <span class="nut-cd-dot">天</span>
      </template>
      <span class="nut-cd-block">{{resttime.h}}</span>
      <span class="nut-cd-dot">:</span>
      <span class="nut-cd-block">{{resttime.m}}</span>
      <span class="nut-cd-dot">:</span>
      <span class="nut-cd-block">{{resttime.s}}</span>
    </template>
  </span>
</template>
<script>

function fill2(v) {
  v += '';
  while(v.length < 2) {
    v = '0' + v;
  }
  return v;
}
function restTime(t) {
  const ts = t;
  let rest = {
    d: '-',
    h: '--',
    m: '--',
    s: '--'
  };
  if(ts === 0) {
    rest = {
      d: '0',
      h: '00',
      m: '00',
      s: '00'
    };
  }
  if(ts) {
    const ds = 24 * 60 * 60 * 1000;
    const hs = 60 * 60 * 1000;
    const ms = 60 * 1000;

    const d = ts >= ds? parseInt(ts / ds): 0;
    const h = ts - d*ds >= hs? parseInt((ts - d*ds) / hs): 0;
    const m = ts - d*ds - h*hs >= ms? parseInt((ts - d*ds - h*hs) / ms): 0;
    const s = parseInt((ts - d*ds - h*hs - m*ms) / 1000);
    
    if(d >= 0) rest.d = d + '';
    if(h >= 0) rest.h = fill2(h);
    if(m >= 0) rest.m = fill2(m);
    if(s >= 0) rest.s = fill2(s);
      
  }
  return rest;
};

const countdownTimer = {
  name: 'CountDown',
  data() {
    const rest = this.rest;
    return {
      restTime: rest
    }
  },
  props: {
    paused: {
      default: false,
      type: Boolean
    },
    showPlainText: {
      default: false,
      type: Boolean
    },
    rest: {
      default: 0,
      type: Number
    },
    interval: {
      default: 1000,
      type: Number
    },
    remoteCurrTime: {
      // 服务器时间戳
      default: null,
      type: Number
    }
  },
  computed: {
    resttime() {
      return restTime(this.restTime);
    },
    plainText() {
      const {d, h, m, s} = this.resttime;
      return `${d > 0? d + '天': h}小时${m}分${s}秒`;
    }
  },
  created() {
    if(this.interval > 0) {
      let start = 0;
      const curr = Date.now();
      if(this.remoteCurrTime) {
        const diffTime = curr - this.remoteCurrTime;
        this.restTime += diffTime;
      }
      const countdown = () => {
        
        if(this.restTime > 0) {
          let _curr = Date.now();
          if(parseInt((_curr - curr) / this.interval) === start + 1) {
            start ++;
            if(!this.paused) {
              this.restTime -= 1000;
            }
          }
          window.requestAnimationFrame(countdown);
        }else{
          console.log('stoped', this.restTime);
        }
      }
      window.requestAnimationFrame(countdown);
    }
  }
}
countdownTimer.restTime = restTime;

export {restTime};
export default countdownTimer; 
</script>


