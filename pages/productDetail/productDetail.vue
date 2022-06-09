<template>
	<view>
		商品详情页
		<view class="goods-carts">
			<uni-goods-nav :options="options" :buttonGroup="buttonGroup" :fill="true" @buttonClick="buttonClick"
				@click="onClick"></uni-goods-nav>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onShareAppMessage() {
			// return {
			// 	title: '分享标题',
			// 	desc: '自定义分享标题，学习中'
			// 	path: 'pages/product/product',
			// 	imageUrl: 'https://img0.baidu.com/it/u=2635130093,4202492912&fm=26&fmt=auto&gp=0.jpg'
			// }
		},
		methods: {
			buttonClick(e){
				uni.navigateTo({
					url:"/pages/createOrder/createOrder?id=1&userId=53",
				})
				const tapIndex = e.index
			},
			onClick() {
				console.log("加入购物车")
				// uni.getProvider({
				// 	service: 'payment',
				// 	success(res) {
				// 		if (~res.provider.indexOf('wxpay')) {
				// 			/* 
				// 			 第一步： 下单
				// 			 调用后端接口先下单，并且获取appId， 签名以及其他信息
				// 			 第二步， 发起支付
				// 			 1、uni.requestPayment  传入第一步获取的参数。
				// 			 第三步： 查询支付状态
				// 			 */
				// 			uni.showLoading({
				// 				title: '正在调起微信支付'
				// 			})
				// 			let params = {
				// 				money: 200,
				// 				bs: 4
				// 			}
				// 			// 调用后端接口获取appId， 签名以及其他信息
				// 			uni.requestPayment({
				// 				provider: 'wxpay',
				// 				uni.requestPayment({
				// 					provider: 'wxpay',
				// 					orderInfo,
				// 					success() {},
				// 					fail() {}
				// 				})
				// 			})
				// 		}
				// 	}
				// })

			}
		}
	}
</script>

<style>
	.goods-carts {
		display: flex;
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
