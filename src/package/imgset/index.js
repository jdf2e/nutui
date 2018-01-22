/* 过滤器是依据http://storage.jd.com/doc/jd-image.pdf文档所作，适合京东业务
* @params url 后端给的图片路径，必填
* @params width 图片宽度
* @params height 图片高度
* @params host 域名，分四种 1主站：img10.360buyimg.com 2移动端：m.360buyimg.com 3印尼：img10.jd.id 4内网访问：img10.360buyimg.local
* @params postfix 后缀处理，后缀可添加：降质处理 !75、裁剪任意矩形 !cr_200x100_20_30 、原型图片的访问 !c200、转为webp格式 .webp
* @params business 业务，有两种 主站商品的业务（一共12种：n0、n1、n2、n3、n4、n5、n6、n7、n8、n9、n11、n12） 普通业务（如 test、pop等）
*/
function ImgSet(url, params) {
    let business = params.business || 'test';
    let postfix = params.postfix || '';
    let width = params.width;
    let height = params.height;
    let imgUrl = '//' + hostStatus(params.host) + '/' + business;
    if (width && height) {
        imgUrl += '/s' + width + 'x' + height + '_' + url;
    } else {
        imgUrl += '/' + url;
    }
    return imgUrl + postfix;
}

//域名处理
function hostStatus(status) {
	let host = '';
	switch (status + ''){
		case '1':
		  host = mainStationHost();
		  break;
		case '2':
		  host = 'm.360buyimg.com';
		  break;
		case '3':
		  host = 'img10.jd.id';
		  break;
		case '4':
		  host = 'img10.360buyimg.local';
		  break;
		default:
		  host = mainStationHost();
	}
	return host;
}

//主站域名处理
function mainStationHost() {
	var imgArray = [10, 11, 12, 13, 14, 20, 30];//域名有多种
	return 'img' + imgArray[Math.floor(Math.random() * imgArray.length)]+ '.360buyimg.com';
}


ImgSet.install = function(Vue) {
  Vue.filter(ImgSet.name, ImgSet);
};

export default ImgSet