<template>
	<div class="nut-short-pwd" v-show="show">
        <transition name="fade">
		    <div class="nut-mask" @click="closeLayer" v-show="show"></div>
        </transition>
        <transition :name="layerTran">
            <div class="nut-layer" :class="{'nut-layer-center':isCenter}" v-show="show">
                <div class="nut-title">
                    <span class="nut-close" @click="closeLayer"></span>
                    {{nutTranslate('lang.shortpassword.tip1')}}
                </div>
                <div class="nut-input-w">
                    <input type="tel" ref="realInput" class="nut-real-input" maxlength="6"  autocomplete="off" autofocus="autofocus" v-model="shortpwdValue" @input="shortpwdInput($event)"/>
                    <div class="nut-fake-list" ref="nutFakeList">
                        <ul>
                            <li v-for="item in fakeInputItems" :key="item.id">
                                <input  type="password" maxlength="1" v-model="item.val"/>
                            </li>
                            
                        </ul>
                    </div>
                    <!-- <img src="../../assets/img/cursor.gif" class="nut-fake-cursor" :style="fakeCursorStyle"/> -->
                    <div class="nut-forget" v-if="link !=''">
                        <a :href="link">{{nutTranslate('lang.shortpassword.tip2')}}</a>
                    </div>
                </div>
            </div>
        </transition>
	</div>

</template>

<script>
import locale from "../../mixins/locale";
export default {
	name:'nut-shortpassword',
	mixins: [locale],
	props:{
		'visible':{
			type:Boolean,
			default:false,
			
		},
		'link':{
			type:String,
			default:'javascript:;'
		},
		'type':{
			type:String,
			default:'bottom',
		}
	},
	data(){
		return{
			shortpwdValue:'',
			regExp:/^[0-9]*$/,
			// fakeCursorStyle:{
			// 	display:'none',
			// 	left:'0px'
			// },
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
			isCenter:this.type == 'bottom'?false:true,
			layerTran:this.type == 'bottom'?'popup':'fade',
			show:false,

		}
	},
	watch:{
		'visible'(val,oldVal){
			if(!val){
				clearTimeout(this.timer);
				this.timer = setTimeout(()=>{
					this.show = val;
				},100)
			}else{
				this.show = val;
			}
		}
	},
	methods:{
		closeLayer(){
			this.timer = setTimeout(()=>{
				this.$emit('close');
			},300)
			
		},
		shortpwdInput(e){
			let val = e.target.value;
			if(this.regExp.test(val)){
				//位移假光标
				if(val.length < 6){
					let num = this.$refs.nutFakeList.offsetLeft + 26;
					var left = val.length*54 + num;
					// this.fakeCursorStyle = {
					// 	'left':left+'px',
					// 	'display':'block'
					// }
					
				}else{
					// this.fakeCursorStyle = {
					// 	'display':'none'
					// }
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
	computed:{

	},
	mounted(){

	},
	destroyed(){
		this.timer = null;
	}
}

</script>
