var myMixin ={
    data(){
        return {
          content:'',
          codeurl:'',
          demourl:''
        }
      },
    methods:{
        closelayer(){
          this.content = '';
        },
        toast(e){
          const options = {
            noHeader:true,
            noFooter:true,
            content:e.target.parentElement.outerHTML
          }        
          this.content = options.content;
          let copy = this.copy;
          new copy('.copy',{
              target:res => {         
                return res.previousElementSibling
              }
          });   
        },  
        dsCode(e){
            let tag = e.target;
            if(tag.attributes.toast){
                this.toast(e)  
            }      
        }
  },
  mounted(){   
    this.$nextTick(()=>{
        let copy = this.copy;
        new copy('.copy',{
            target:res => {         
            return res.previousElementSibling
            }
        });    
        let demourl = 'https://nutui.jd.com/demo.html#'+this.$route.path;
        this.demourl = demourl;
        this.qrcode.toDataURL(demourl,{width:170},(err,url)=>{
            this.codeurl = url
        });
    });
  }
}
module.exports = myMixin;