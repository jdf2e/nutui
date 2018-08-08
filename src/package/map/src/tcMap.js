const initMap = (key) => {
    //初始化地图信息    
    let tcMapScript = document.querySelector('#tcMapScript');
    return new Promise(function (resolve, reject) {
            window.initTcMap = function () {     
                window.tcMap = qq;                    
                resolve(qq);
            };
            if(!tcMapScript){
                let script = document.createElement("script");
                script.id="tcMapScript"
                script.type = "text/javascript";
                script.src = "http://map.qq.com/api/js?v=2.exp&callback=initTcMap&key="+key;
                script.onerror = reject;
                document.head.appendChild(script);
            }else{
                if(window.tcMap){
                    resolve(window.tcMap);
                }

            }            
    })
}
export default initMap;