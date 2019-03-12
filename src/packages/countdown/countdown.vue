<template>
  <span class="nut-cd-timer">
    <template v-if="showPlainText">
      <span class="nut-cd-block">{{plainText}}</span>
    </template>
    <template v-else>
      <template v-if="resttime.d > 0 && showDays">
        <span class="nut-cd-block">{{resttime.d}}</span>
        <span class="nut-cd-dot">天</span>
      </template>
      <span class="nut-cd-block">{{resttime.h}}</span><span class="nut-cd-dot">:</span><span class="nut-cd-block">{{resttime.m}}</span><span class="nut-cd-dot">:</span><span class="nut-cd-block">{{resttime.s}}</span>
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
  name: 'nut-countdown',
  data() {
    return {
      restTime: 0,
      p: 0,
      _curr: 0
    }
  },
  props: {
    paused: {
      default: false,
      type: Boolean
    },
    showDays: {
      default: false,
      type: Boolean
    },
    showPlainText: {
      default: false,
      type: Boolean
    },
    interval: {
      default: 1000,
      type: Number
    },
    startTime: {
      // 可以是服务器当前时间
      default: Date.now(),
      type: [Number, String]
    },
    endTime: {
      default: Date.now(),
      type: [Number, String]
    }
  },
  computed: {
    resttime() {
      const rest = restTime(this.restTime);
      const {d, h, m, s} = rest;
      if(!this.showDays && d > 0) {
        rest.h = Number(rest.h) + d * 24;
        rest.d = 0;
      }
      return rest;
    },
    plainText() {
      const {d, h, m, s} = this.resttime;

      return `${d > 0 && this.showDays? d + '天' + h: h}小时${m}分${s}秒`;
    }
  },
  watch: {
    paused(v, ov) {
      if(!ov) {
        this._curr = Date.now();
      }else{
        this.p += (Date.now() - this._curr);
      }
    }
  },
  created() {
    if(this.interval > 0) {
      let _start = 0;
      const curr = Date.now();
      const start = new Date(+this.startTime).getTime();
      const end = new Date(+this.endTime).getTime();
      const diffTime = curr - start;
      
      this.restTime = end - (start + diffTime);
      this.timer = setInterval(() => {
        if(!this.paused) {
          let restTime = end - (new Date().getTime() - this.p + diffTime);
          restTime -= 1000;
          this.restTime = restTime;
          if(restTime < 0) {
            this.restTime = 0;
            clearInterval(this.timer);
          }
        }else{
          // 暂停
        }
      }, this.interval);
      
    }
  }
}
countdownTimer.restTime = restTime;

export {restTime};
export default countdownTimer; 
</script>


