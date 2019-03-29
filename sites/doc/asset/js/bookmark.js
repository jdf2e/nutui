import vb from '../asset/js/isVisibiliy.js';
import root from '../root.js';
        export default {
            mixins:[root],
            mounted(){
              let visb = vb('.visibility');
              visb.then(res=>{
               
               
                let id  = res.target.id;
                let index =id.replace(/head/,'');                
                let li = document.querySelector('.level'+index);
                if(li){
                  
                }
              })
            }
        }