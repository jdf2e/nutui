<template>
  <div class="wrapper">
    快速上手
    <p id='copy'>这个用来实验按钮的好坏</p>
    <button class="btncp"  data-clipboard-target="#copy">点击复制</button>
  </div>
</template>
<style>
body{
  background: #fff;
}
</style>

<script>
export default {
    name:'index',
    data(){
     
        return{
            path:'',
            packages:{},
            sortedPackages:[],
            version:''
        }
    },
    watch:{
      packages(){
        const compare = (obj1, obj2)=>{
            const val1 = obj1.name;
            const val2 = obj2.name;
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                return 0;
            }            
        }

        this.sortedPackages = [...this.packages].sort(compare);
      }
    },
    methods:{
    },
    created(){
       
        // copys.on('success', function(e) {
        //     console.info('Action:', e.action);
        //     console.info('Text:', e.text);
        //     console.info('Trigger:', e.trigger);

        //     e.clearSelection();
        // });
    }
}
</script>
<style>

</style>

<style lang="scss" scoped>
.logo{
  text-align:center;
  padding:16px 0;  
  img{
    width: 240px;
  }
  div{
    font-family:Roboto,Lato,sans-serif;
    font-size: 24px;
    letter-spacing: 0.14px;
    line-height: 20px;
    margin-top: 12px;
  } 
}
.l-s{
    list-style: none;   
    margin:0;
    padding:10px 0;    
    li{
      line-height: 40px;     
    
      border-bottom:1px solid rgba(204, 204, 204, 0.4);
      &:first-child{
        border-top:none;
      }
    }
    a{
      text-decoration: none;
      color:#333;
      display: inline-block;
      width: 100%;
      height: 100%;
      padding-left: 20px; 
      box-sizing: border-box;
    }
}
</style>
