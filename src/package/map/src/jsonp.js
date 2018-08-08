
function jsonp (options){
    let creatTime ='jsonp' + Number(new Date());    
    let option = {};
    option = Object.assign(option,options);      
    let params = "";
    let url = option.url;
    if(option.data){
        for(let key in option.data){
            params = params + key + '=' + option.data[key] + '&';
        }
    }
    url = url + '?'+params;  
    return new Promise(function (resolve, reject) {
        window.onBack = (res)=>{
            console.log(res);                  
            resolve(res);
            setTimeout(() => {
                let needDelete = document.querySelector('#'+creatTime);
                needDelete&&needDelete.remove();
            }, 0);
        };
        let script = document.createElement("script");        
        script.type = "text/javascript";
        script.async = true;
        script.id=creatTime;
        script.src = url+ "output=jsonp&callback=onBack";
        document.head.appendChild(script);
        script.onerror = reject;
    })   
}
export default jsonp;