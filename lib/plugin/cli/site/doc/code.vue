<template>
	<div>
		<div class="nut-qrcode" id="qrcode">二维码位置</div>
	</div>
</template>
<script>
import QRCode from './asset/js/code.js';
export default {
	name: 'nut-qrcode',
	props: {
		QCWidth: {
			type: Number,
			default: 160,
		},
		QCHeight: {
			type: Number,
			default: 160,
		},
		content: {
			type: String,
			required: true,
		},
		fontColor: {
			type: String,
			default: '#000',
		},
		backColor: {
			type: String,
			default: '#fff',
		},
	},
	data() {
		return {};
	},
	mounted() {
		this.qrcode();
	},
	methods: {
		qrcode() {
			let qrcode = new QRCode('qrcode', {
				width: this.QCWidth,
				height: this.QCHeight, // 高度
				text: this.content, // 二维码内容
				colorDark: this.fontColor,
				colorLight: this.backColor,
				margin: 0,
			});
		},
	},
};
</script>
<style lang="scss"></style>
