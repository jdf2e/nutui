const initLoaction = () => {
   
     //初始化地图信息    
     let tcMapScript = document.querySelector('#initLoaction');
     return new Promise(function (resolve, reject) {
             window.initLoaction = function () {    
                
                // window.lc = res;                    
                 resolve();
             };
             if(!tcMapScript){
                 let script = document.createElement("script");
                 script.id="initLoaction"
                 script.type = "text/javascript";
                 script.src = "https://apis.map.qq.com/tools/geolocation/min?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp&callback=initLoaction";
                 script.onerror = reject;
                 document.head.appendChild(script);
             }else{                 
                resolve();  
             }            
     })
}
export default initLoaction;