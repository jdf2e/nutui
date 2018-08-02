<!--短密码组件shortpwd-->
<template>
	<div class="nut-short-pwd" v-show="show">
		<div class="nut-mask" @click="closeLayer"></div>
        <div class="nut-layer">
            <div class="nut-title">
            <span class="nut-close" @click="closeLayer"></span>
            输入数字密码
        </div>
        <div class="nut-input-w">
            <input type="tel" ref="realInput" class="nut-real-input" maxlength="6"  autocomplete="off" autofocus="autofocus" v-model="shortpwdValue" @input="shortpwdInput($event)"/>
            <div class="nut-fake-list">
            	<ul>
            		<li v-for="item in fakeInputItems" :key="item.id">
            			<input  type="password" maxlength="1" v-model="item.val"/>
            		</li>
            		
   				</ul>
       		</div>
            <img src="./img/cursor.gif" class="nut-fake-cursor" :style="fakeCursorStyle"/>
            <div class="nut-forget">
            	<a href="">忘记密码</a></div>
        	</div>
    	</div>
	</div>

</template>

<script>
	export default {
		name:'nut-shortpwd',
	    props:{
	        'show':{
	            type:Boolean,
	            default:false,
	            
	        }
	    },
	    data(){
	        return{
	        	shortpwdValue:'',
	            regExp:/^[0-9]*$/,
	            fakeCursorStyle:{
	            	display:'none',
	            	left:'0px'
	            },
	            fakeInputItems:[
		            {
		            	id:1,
		            	val:''
		            },
		            {
		            	id:2,
		            	val:''
		            },
		            {
		            	id:3,
		            	val:''
		            },
		            {
		            	id:4,
		            	val:''
		            },
		            {
		            	id:5,
		            	val:''
		            },
		            {
		            	id:6,
		            	val:''
		            },
	            ],
	            timer:null,

	        }
	    },
	    methods:{
	    	closeLayer(){
	    		this.$emit('close');
	    	},
	    	shortpwdInput(e){
	    		let val = e.target.value;
	    		if(this.regExp.test(val)){
	    			//位移假光标
                    if(val.length < 6){
                        var left = val.length*1.05 + 1.1;
                        this.fakeCursorStyle = {
                        	'left':left+'rem',
                        	'display':'block'
                        }
                        
                    }else{
                        this.fakeCursorStyle = {
                        	'display':'none'
                        }
                        this.$refs.realInput.blur();
                        
                        this.timer = setTimeout(()=>{
                        	  //如果是6位输入满，将直接关闭弹层，给出输入的值
                        	this.$emit('close',val);
                        	this.shortpwdValue = '';
                        	this.fakeInputItems = [
					            {
					            	id:1,
					            	val:''
					            },
					            {
					            	id:2,
					            	val:''
					            },
					            {
					            	id:3,
					            	val:''
					            },
					            {
					            	id:4,
					            	val:''
					            },
					            {
					            	id:5,
					            	val:''
					            },
					            {
					            	id:6,
					            	val:''
					            },
				            ];
                        	

                        },300)
                      
                    }
                    for(var i =0 ;i<val.length; i++){
                        this.fakeInputItems[i].val = val[i];
                    }
	    		}else{
	    			//清空非数字
                    this.shortpwdValue = val.replace(/\D/g,'');
	    		}

	    		//删除操作的时候同步假密码框
                for(var i=0; i<6;i++){
                    if(i >=val.length){
                        this.fakeInputItems[i].val = '';
                    }
                }
	    	}
	    },
	    watch:{

	    },
	    computed:{

	    },
	    mounted(){

	    },
		destroyed(){
			this.timer = null;
	    }
	}

</script>


<style lang="scss" scoped>

	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%; 
      font: inherit;
      vertical-align: baseline
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block
    }
     
    body {
      line-height: 1 ;
      color: #303030;
      font-family: "SimHei","Helvetica Neue",Arial,"Droid Sans", sans-serif;
      background:#f6f6f6;
    }    

    /* ios默认文本框阴影 */ 
    input[type=text],textarea{   
      -webkit-appearance:none;
    }
    /* 低版本安卓文本框层级问题 */
    input:focus{
      -webkit-user-modify:read-write-plaintext-only;
    }
    ol, ul {
      list-style: none
    } 

    blockquote, q {
      quotes: none
    }

    blockquote:before, blockquote:after, q:before, q:after {
      content: '';
      content: none
    }

    table {
      border-collapse: collapse;
      border-spacing: 0
    }

    * {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -ms-box-sizing: border-box;
      box-sizing: border-box
    }
    html, body {
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: 100%;
      width: 100%;
      font-size: 100px;
    }
    a, button, input {
      outline: 0 none;
      text-decoration: none
    }

    img {
      border: 0 none;
      vertical-align: bottom;
      -ms-interpolation-mode: bicubic
    }
    .hide{
      display: none;
    }
    .fr{
      float: right;
    }
    .fl{
      float: left;
    }
    .txtc{text-align: center;}
    .clr{clear:both;}


	.nut-short-pwd{
	    color:#232326;
	    font-size:14px;
	    .nut-mask{
	        position: fixed;
	        top:0;
	        right:0;
	        left:0;
	        bottom:0;
	        background-color:rgba(0,0,0,0.7);
	        z-index:9999;
	    }
	    .nut-layer{
	        background-color:#f3f5f7;
	        position:fixed;
	        bottom:0;
	        left: 0;
	        width:100%;
	        z-index:10000;
	        .nut-title{
	            line-height: 1rem;
	            text-align: center;
	            border-bottom:1px solid #f1f2f4;
	            font-size: 16px;
	        }
	        .nut-close{
	            height:0.38rem;
	            width:0.38rem;
	            display: inline-block;
	            background:url(./img/close.png) 0 0 no-repeat;
	            background-size:100% 100%;
	            position:absolute;
	            top:0.3rem;
	            left:0.3rem;
	        }

	        .nut-input-w{
	            padding:0.6rem 0 0.9rem 0;
	            text-align:center;
	            position:relative;
	            .nut-fake-list{
	                background:url(./img/shortpwd.png) 0 0 no-repeat;
	                background-size:100% 100%;
	                height:1.4rem;
	                width:6.44rem;
	                display: inline-block;
	                ul{
	                    padding-top:0.23rem;
	                }
	                li{
	                    float:left;
	                    margin-left: 0.15rem;
	                }
	                input{
	                    height:0.9rem;
	                    width:0.9rem;
	                    border:0;
	                    background-color:#fff;
	                    text-align: center;
	                    font-size: 16px;
	                }

	            }

	            .nut-real-input{
	                z-index: 10001;
	                position:absolute;
	                width:6.35rem;
	                top:0.6rem;
	                margin-left:-100%;
	                height:1.4rem;
	                opacity: 0;
	                width:200%;
	            }
	        }
	    }

	    .nut-forget{
	        text-align: right;
	        line-height: 0.6rem;
	        padding-right: 0.66rem;
	        font-size: 0.26rem;
	        a{
	            color: #666;
	            &:before{
	                content: '';
	                display: inline-block;
	                width: 0.24rem;
	                height: 0.24rem;
	                background: url(./img/w-icon.png) no-repeat;
	                background-size: 100% 100%;
	                vertical-align: middle;
	                margin: -0.08rem 0.1rem 0 0;
	            }
	        }
	        
	    }

	    .nut-fake-cursor{
	        position:absolute;
	        top:1rem;
	        left:1.1rem;
	        display:block;
	    }

	}

	//android fixed ios absolute
	.nut-fixed{

	    .nut-mask{
	        position:fixed;

	    }
	    .nut-layer{
	        position:fixed;
	    }
	}

	//强制页面在一屏幕范围内
	.nut-dis-scroll{
	    overflow: hidden;
	    height:100%;
	    width:100%;
	}

	//适配
	@media screen and (min-width: 376px) {
	    .nut-fake-cursor{
	        top:1.05rem;
	    }
	}

</style>