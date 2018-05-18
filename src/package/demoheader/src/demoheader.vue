<template>
        <div class="nut-demo-header">
          <h1>{{name}}</h1>
              <svg v-if="typeIdx===0" viewBox="0 0 104 20" width="104" height="20">
                <use xlink:href="#component"/>
              </svg>
              <svg v-else-if="typeIdx===1" viewBox="0 0 78 20" width="78" height="20">
                <use xlink:href="#filter"/>
              </svg>
              <svg v-else-if="typeIdx===2" viewBox="0 0 90 20" width="90" height="20">
                <use xlink:href="#directive"/>
              </svg>
              <svg v-else-if="typeIdx===3" viewBox="0 0 86 20" width="86" height="20">
                <use xlink:href="#method"/>
              </svg>
          <hr>
          <div class="demo-desc">{{cpt && cpt.desc}}</div>
        </div>
</template>
<script>
const componentIcon = import('../../../asset/img/svg/component.svg');
const filterIcon = import('../../../asset/img/svg/filter.svg');
const directiveIcon = import('../../../asset/img/svg/directive.svg');
const methodIcon = import('../../../asset/img/svg/method.svg');

export default {
  name: "nut-docheader",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {

    };
  },
  computed: {
    typeIdx(){
      return this.cpt?['component','filter','directive','method'].indexOf(this.cpt.type.toLowerCase()):0;
    },
    chnType(){
      return ['组件','过滤器','指令','方法'][this.typeIdx]||'';
    },
    cpt(){
      return this.NUTCONF.packages.find((x)=>{return x.name==this.name});
    }
  },
  methods: {

  },
  mounted() {
  }
};
</script>
<style lang="scss">
.nut-demo-header{
    position:relative;
    min-height:182px; 
    hr{
        margin:15px 0 20px;
    }
    .doc-head{
        margin-bottom:35px;
    }
    .demo-desc{
        border-left:5px solid #E1E1E1;
        padding-left:10px;
        max-width:700px;
    }
}
</style>