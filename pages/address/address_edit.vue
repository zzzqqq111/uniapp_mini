<template>
	<view class="container">
		<uni-forms :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="性别" name="sex">
				<uni-data-checkbox v-model="formData.sex" :localdata="sexs" />
			</uni-forms-item>
			<uni-forms-item required name="mobile" label="手机号">
				<uni-easyinput type="text" v-model="formData.mobile" placeholder="请输入手机号" />
			</uni-forms-item>
			<uni-forms-item required name="address" label="地址">
				<uni-data-picker placeholder="请选择地址" popup-title="请选择城市" :localdata="addressList"
					map="{text:'name',value:'code'}" orderby="value asc" :step-searh="true" self-field="code"
					parent-field="parent_code" @change="onchange" @nodeclick="onnodeclick">
				</uni-data-picker>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>

<script>
	import addressData from "../../static/js/data.json"
	export default {
		data() {
			return {
				formData: {},
				addressList: addressData,
				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '保密',
					value: 2
				}],
			}
		},
		methods: {
			onchange(e) {
				const value = e.detail.value
			},
			onnodeclick(node) {

			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 24rpx 32rpx;
	}
</style>
