<template>
    <div class="nut-rate">
    	<ul class="nut-rate-box">
            <template v-for="(value,index) in num">
                <li 
                    @click="touchEvn(index)"
                    :style="{backgroundImage: 'url('+(index<isActive?activeUrl:originalUrl)+')',height:picHeight+'rem',width:picWidth+'rem'}"
                    class='nut-list'>
                </li>
            </template>
    	</ul>
    </div>
</template>
<script>
export default {
  name: "nut-rate",
  props: {
    num: {
      type: [Number, String],
      default: 5
    },
    originalPath: {
      type: String,
      default: "none"
    },
    activePath: {
      type: String,
      default: "none"
    },
    picWidth: {
      type: [Number, String],
      default: 0.5
    },
    picHeight: {
      type: [Number, String],
      default: 0.5
    },
    currValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isActive: this.currValue
    };
  },
  computed: {
    originalUrl() {
      if (this.originalPath == "none") {
        return `"data:image/svg+xml, %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E %3Cpath fill='%23F23030' d='M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899zM8 11.773l-3.492 1.836 0.667-3.888-2.825-2.753 3.904-0.567 1.746-3.537 1.746 3.537 3.904 0.567-2.825 2.753 0.667 3.888-3.492-1.836z'%3E%3C/path%3E %3C/svg%3E"`;
      } else {
        return this.originalPath;
      }
    },
    activeUrl() {
      if (this.activePath == "none") {
        return `"data:image/svg+xml, %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E %3Cpath fill='%23F23030' d='M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z'%3E%3C/path%3E %3C/svg%3E"`;
      } else {
        return this.activePath;
      }
    }
  },
  methods: {
    touchEvn(index) {
      this.isActive = index + 1;
      this.$emit("change-rate", index);
    }
  }
};
</script>
<style lang="scss">
.nut-rate-box {
  list-style-type: none;
  margin: 0;
  padding: 0.4rem 0.3rem;
  .nut-list {
    display: inline-block;
    margin-right: 0.32rem;
    background-repeat: no-repeat;
    background-size: contain;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>