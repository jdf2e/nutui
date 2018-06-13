<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>      
        <!-- DEMO区域 -->
        <nut-sideslipbutton 
        @slide-left="slideLeft" 
        @slide-right="slideRight" 
        @slide-no="slideNo" 
        during="0.2" 
        customClass="aaaaa">
            <div slot="slidedom" class="slidedom">
                <div class="addr">
                    <p class="name-mobile">159****8888</p>
                    <p class="full-addr">北京市大兴区亦庄经济开发中心京东大厦B座</p>
                </div>
                <a class="addr-edit" href="javascript:void(0)"></a>
            </div>
            <div slot="slideoper" class="slideoper">删除/收藏</div>
        </nut-sideslipbutton>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
      slideLeft() {
          console.log('左划了');
      },
      slideRight() {
          console.log('右划了');
      },
      slideNo() {
          console.log('没有划动');
      }
    }
}
</script>


