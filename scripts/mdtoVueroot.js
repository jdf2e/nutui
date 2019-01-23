//插入 默认的 script 标签
let jsroot=  `<script>export default {
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
    //let that = this;
    //let pre = document.querySelectorAll('pre');     
    // for(let i=0,item;item = pre[i];i++){      
    //   item.classList.toggle('prettyprint');   
    //   let creatC = document.createElement('i');
    //   creatC.setAttribute('copy','copy');    
    //   creatC.setAttribute('data-clipboard-action','copy');
    //   creatC.setAttribute('data-clipboard-target','code');
    //   creatC.setAttribute('class','copy')
    //   let creatA = document.createElement('i');
    //   creatA.setAttribute('toast','toast');  
    //   item.appendChild(creatC);
    //   item.appendChild(creatA);      
    // }

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
</script>`;
module.exports= jsroot ;