<template>
	<view class="container">
		<navigator class="address_select flex" url="/pages/address/address">
			<image src="../../static/images/my/about.png" class="left_icon"></image>
			<view class="middle">
				<text>{{address.title}}</text>
				<text>{{address.name}}&nbsp;&nbsp;{{address.mobile}}</text>
			</view>
			<image src="../../static/images/my/collect.png" class="left_icon"></image>
		</navigator>
		<uni-button>提交订单</uni-button>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				address: {
					id: 2,
					title: "北京市北京市朝阳区汾河天元7幢707",
					name: '可可',
					mobile: '15703412890'
				}
			}
		},
		onLoad(params) {
			console.log(params)
			const id = params.id
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.left_icon, .left_icon{
		width: 24px;
		height: 24px;
	}
	.middle{
		padding: 0 15px;
		line-height: 32px;
	}
	.middle text{
		display: block;
	}
	.middle text:nth-child(2){
		color: #999;
	}
</style>

