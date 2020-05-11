import hide from './compents/hidden/hidden.vue';
import vb from './asset/js/isVisibiliy.js';
const myMixin ={
    data(){
        return {
          content:'',
          codeurl:'',
          demourl:'',
          levalcur:1
        }
      },
    components:{
        hide
    },
    methods:{
        leavelchose(index){
          this.levalcur = index;
        },
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
    let visb = vb('.visibility');
    visb.then(res=>{
      let id  = res.target.id;
      let index =Number(id.replace(/head/,''));       
      if(index>0){
        this.levalcur = index
      }
    })
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

export default myMixin;