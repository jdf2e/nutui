<template>
        <div class="nut-doc-header">
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
              <figure v-if="showQrCode" class="doc-qr-code">
                <qriously :value="'http://nutui.jd.com/demo.html#/'+name" :size="150" />
                <figcaption>手机扫描二维码，查看DEMO</figcaption>
              </figure>
          <hr>
          <div class="doc-desc">{{cpt.desc}}</div>
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
    },
    showQrCode:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {

    };
  },
  computed: {
    typeIdx(){
      return ['component','filter','directive','method'].indexOf(this.cpt.type.toLowerCase());
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
.nut-doc-header{
    position:relative;
    min-height:182px;
    .doc-qr-code{
        position: absolute;
        right:10px;
        top:0px;
        margin:0;
    }
    .doc-qr-code canvas{
        width:150px;
        height:150px;
        padding:4px;
        border:1px solid #CCC;
        background:#FFF;
    }
    .doc-qr-code figcaption {
        font-size:12px;
        color:rgba(193,193,193,0.9);
        text-align:center;
    }
    hr{
        margin:15px 0 20px;
    }
    .doc-head{
        margin-bottom:35px;
    }
    .doc-desc{
        border-left:5px solid #E1E1E1;
        padding-left:10px;
        max-width:700px;
    }
}
</style>