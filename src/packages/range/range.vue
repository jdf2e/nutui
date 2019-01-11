<template>
    <div class="nut-range">
        <div class="nut-range-left-text" v-if="showRangeTxt">{{ range[0] }}</div>
        <div class="nut-range-box" @click="onClick" :style="{background: boxColor}">
            <div 
							class="nut-range-area" 
							:style="{
								width: Math.abs(barleft2 - barleft1)+'px', 
								left: Math.min(barleft2, barleft1)+'px',
								background: mainColor
							}">
						</div>
            <nut-range-bar 
                :initLeft="initLeft1" 
                @getPos="getPosLeft"
                :showLabelAlways="showLabelAlways"
                :showLabel="showLabel"
                :current="currentLeft"
                :ani.sync="ani"
								:mainColor="mainColor"/>
            <nut-range-bar 
                :initLeft="initLeft2" 
                @getPos="getPosRight"
                :showLabelAlways="showLabelAlways"
                :showLabel="showLabel"
                :current="currentRight"
                :ani.sync="ani"
								:mainColor="mainColor"/>
        </div>
        <div class="nut-range-right-text" v-if="showRangeTxt">{{ range[1] }}</div>
    </div>
</template>
<script>
import Movebar from './movebar.vue';

function toRGBA(c, opacity) {
	// 16进制、rgb颜色转rgba
	let reg = /(rgb)(\(\d+,\s*\d+,\s*\d+)(\))/;
	if(reg.test(c)) return c.replace(reg, '$1'+(opacity? 'a': '')+'$2'+(opacity? ',' + opacity: '')+'$3');
	if(/^#[0-9a-f]+/.test(c)) {
		if(c.length === 4) {
			c = c.replace(/^#(\d)(\d)(\d)/, '#$1$1$2$2$3$3');
		}
		if(c.length === 7) {
			return toRGBA('rgb('+parseInt(c.slice(1, 3), 16)+', '+parseInt(c.slice(3, 5), 16)+', '+parseInt(c.slice(5, 7), 16)+')', opacity);
		}
	}
	return toRGBA('#ff0000', opacity);
}

export {toRGBA};
export default {
  name: "nut-range",
  components: {
    [Movebar.name]: Movebar
  },
  props: {
    rangeValues: {
      type: Array,
      validator: function(value) {
        return value.length === 2 && value[1] >= value[0];
      },
      default() {
        return [0, 0];
      }
		},
		color: String,
    showLabel: {
      type: Boolean,
      default: false
    },
    showLabelAlways: {
      type: Boolean,
      default: false
    },
    showRangeTxt: {
      type: Boolean,
      default: false
    },
    range: {
      type: Array,
      validator: function(value) {
        return value.length === 2 && value[1] > value[0];
      },
      default() {
        return [0, 10];
      }
    },
    stage: {
      type: [String, Number],
    }
  },
  data() {
    return {
      box: null,
      boxLeft: 0,
			initLeft1: 0,
			initLeft2: 0,
      currentLeft: 0,
			currentRight: 0,
			barleft1: 0,
			barleft2: 0,
      level: null,
			ani: false
    };
  },
  computed: {
    total() {
      return this.range[1] - this.range[0];
    },
    cell() {
      return this.total / this.level;
		},
		mainColor() {
			return this.color?toRGBA(this.color):'';
		},
		boxColor() {
			return this.color?toRGBA(this.color, 0.3):'';
		},
		subColor() {
			return this.color?toRGBA(this.color, 0.5):'';
		}
  },
  methods: {
		updateRangeValues() {
			let rangeValues = this.currentLeft > this.currentRight? [this.currentRight, this.currentLeft]: [this.currentLeft, this.currentRight];
			this.$emit("update:rangeValues", rangeValues);
		},
    getPosLeft(pos) {
			this.currentLeft = this.setCurrent(pos);
			this.barleft1 = pos;
			this.updateRangeValues();
    },
    getPosRight(pos) {
			this.currentRight = this.setCurrent(pos);
			this.barleft2 = pos;
			this.updateRangeValues();
    },
    setCurrent(posi) {
			const trans = posi / this.box.clientWidth * this.total;
			let current = (trans / this.cell) * this.cell + this.range[0];
			return current > this.range[1] - 1? this.range[1]: current < this.range[0] + 1? this.range[0]: Math.round(current);
    },
    setVal(posi) {
      const trans = posi / this.box.clientWidth * this.total;
      this.current = Math.round(trans / this.cell) * this.cell + this.range[0];
      this.$emit("update:value", this.current);
    },
    valToPosi(current) {
			const pos = (current - this.range[0]) * (this.box.clientWidth / this.total);
			return pos;
    },
    setPosi(posi) {
      if (posi < 0 || posi > this.box.clientWidth) return;
      this.posi = posi;
      this.setVal(posi);
    },
    onClick(event) {
      event.preventDefault();
      const pageScrollLeft =
        document.documentElement.scrollLeft || document.body.scrollLeft;
      this.boxLeft = this.box.getBoundingClientRect().left;
      const posi = event.pageX - this.boxLeft - pageScrollLeft;
      this.setVal(posi);
      this.posi = this.valToPosi();
    },
    propInit() {
      if (!this.stage || this.stage > this.range[1] - this.range[0]) {
        this.level = this.range[1] - this.range[0];
      } else {
        this.level = this.stage;
      }
			this.currentLeft = Math.max(this.rangeValues[0], this.range[0]);
			this.currentRight = Math.max(this.currentLeft, Math.min(this.rangeValues[1], this.range[1]));
			this.initLeft1 = this.valToPosi(this.currentLeft);
			this.initLeft2 = this.valToPosi(this.currentRight);
			this.barleft1 = this.initLeft1;
			this.barleft2 = this.initLeft2;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.box = this.$el.querySelector(".nut-range-box");
      this.propInit();
    });
  }
};
</script>
