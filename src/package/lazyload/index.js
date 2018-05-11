import Vue from 'vue';
const imgBase64 = "//st.360buyimg.com/m/images/index/loading.gif";
const failBase64 = "";
Vue.directive('nut-lazyload', {
  // 当被绑定的元素插入到 DOM 中时……
  	bind:function(){

  	},
	inserted: function (el,binding) {		
	  	//图片坐标缓存
		let gridY = {};
		let srcArry = [];
		//获取图片对象
		let elementName = binding.value.element || "[lazyload]";
		let lazyload = el.querySelectorAll(elementName);
		// 聚焦需要加载图片元素		
		let distance = Number(binding.value.distance) || 30;
		let imgLoading = binding.value.imgLoading || imgBase64;
		let failImg =  binding.value.failImg ;		
		let deviceHeight = document.documentElement.clientHeight;
		//整个窗口高度
	 	let allHeight = document.documentElement.scrollHeight;
	 	//初始视口坐标
	 	let positionY = allHeight-deviceHeight-distance;
	 	//获取图片坐标
	 	for(let i=0,index;index = lazyload[i];i++) {
	 		//获取图片路径	
			let imgSrc = index.dataset.src;	
			index.src = imgLoading;
			srcArry.push(imgSrc)
	 	}
		for(let i=0,index;index = lazyload[i];i++) {		
			
			//获取图片路径	
			let imgSrc = index.src;	
			//index.src = imgLoading;
			
				let pageY = index.offsetTop;
				//推到对象里
				gridY[allHeight-pageY +'|'+i] = {
					index:i,
					src:srcArry[i]
				};
			
			
			//获取图片class			
			
		};  	 	
	 	const win = window;	 
	 	
 		let requestAnimFrame = function(){
			return   win.requestAnimationFrame ||
			  		 win.webkitRequestAnimationFrame ||
			 		 win.mozRequestAnimationFrame    ||
			 		 (callback  => win.setTimeout(callback, 1000 / 60));
					
		}()
	 
	 	let scheduledAniFrame = false;
		
		let bodyScroll = () => {	

	 		if (scheduledAniFrame) return;
            scheduledAniFrame = true;
	 		requestAnimFrame(() =>{
	 			scheduledAniFrame = false;
	 			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;	 		
		 		let poitY = positionY-scrollTop;
		 		checkImg(poitY); 
	 		});		 		

		 };
		
		let checkImg = (poitY) => {

			for( let imgTop in gridY) {	
				let post = imgTop.split('|')[0];
	 	 		if(poitY < Number(post)){	

	 	 			let imgObj = new Image();
	 	 			let imgSrc = gridY[imgTop].src;
	 	 			let imgIndex = gridY[imgTop].index;	
	 	 			imgObj.onload = () => {		 	 					
	 	 				lazyload[imgIndex].src = imgSrc	;	 	 				
		 	 			//除去无用对象				 	 			 	 			
	 	 			};
	 	 			imgObj.onerror = () =>{
	 	 				if(failBase64){
	 	 					lazyload[imgIndex].src = failBase64	;	
	 	 				}
	 	 				
	 	 			}
	 	 			imgObj.src = imgSrc;	 	 			 	 			
	 	 			delete gridY[imgTop];	
	 	 		}		 	 
		 	};	
		 	//判断对象是否为空	 	
		 	if(JSON.stringify(gridY) == "{}") {		 		
		 		//win.removeEventListener('scroll',bodyScroll);
		 	};
		}
		checkImg(positionY);
	 	win.addEventListener('scroll',bodyScroll); 	

	},
	update:function(){},
	componentUpdated:function(){}
})


