const ajaxFunction =() => {
    let  xmlHttp;
    try{ // Firefox, Opera 8.0+, Safari
         xmlHttp=new XMLHttpRequest();
     }
     catch (e){
        try{// Internet Explorer
              xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
           }
         catch (e){
           try{
              xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
           }
           catch (e){}
           }
     }
 
     return xmlHttp;
  }
function ajax (options){
    let creatTime ='jsonp' + Number(new Date());
    console.log(creatTime)
    let option = {
        type:"GET"
    };
    option = Object.assign(option,options);
    let xhr = ajaxFunction();
    if(!xhr){
        alert('请更换浏览器!');
        return;
    }    
    if(option.type =="JSONP"){
        let params = "";
        let url = option.url;
        if(option.data){
            for(let key in option.data){
                params = params + key + '=' + option.data[key] + '&';
            }
           // params.replace(/&$/,'')
        }
        url = url + '?'+params;                        
        // xhr.open('GET',url,true);
        // xhr.send();
        // xhr.onreadystatechange = res =>{
        //     console.log(res)
        //     option.always&&option.always(res);
        
        // }        
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

}

export default ajax;