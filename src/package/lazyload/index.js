import Vue from 'vue';
const imgBase64 = "data:image/gif;base64,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";
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


