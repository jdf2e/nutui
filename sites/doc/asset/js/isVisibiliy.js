function isVisibility(param){
    
    let domLists = document.querySelectorAll(param);
    //元素属性
    this.domList = domLists;
    this.showDom = null; //当前展示的节点 
    this.io = null;   
}
isVisibility.prototype.IntersectionObserverRun = function(){  
    let _that = this;
    if(IntersectionObserver){
        _that.io = new IntersectionObserver(
           (res)=>{
            _that.Intersections(res)
           },{  
            rootMargin:'10px 0px 0px 0px',       
            threshold: [ 0, Number.MIN_VALUE, 0.01]        
        });
        setTimeout(()=>{
            //对当前元素进行监听
            _that.domList.forEach((item)=>{
                    _that.io.observe(item);
            })
        })
    }
    
        
} 
isVisibility.prototype.Intersections = function (entries){
    let _that = this;
    if(// 正在交叉
        entries[0].isIntersecting ||
        // 交叉率大于0
        entries[0].intersectionRatio){
          
            let showDom = entries[0];
            this.showDom = showDom;
            if(this.callback)   {
                this.callback(showDom)   
            }
       
    }
};
isVisibility.prototype.then = function(callback){   
    
    if(callback){
        this.callback = callback;
    }   
}
function run (param){
   let visib = new isVisibility(param);
   visib.IntersectionObserverRun();
   return visib;
}
module.exports = run;