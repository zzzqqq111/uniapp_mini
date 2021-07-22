<template>
	<view>
		<view class="product_box" v-for="(item, index) in dataList" :key="item.id" @click="goDetail">
			<image :src="item.image"></image>
			<view class="product_content_box">
				<text class="title">{{item.title}}{{index+1}}</text>
				<text>{{item.content}}</text>
				<text style="text-align: right;">已购买： 99件</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		comments: {

		},
		data() {
			return {
				total: 45,
				dataList: [{
					id: 2,
					title: '标题',
					content: '大脑放空士大夫艰苦司法解释基础上开绿灯解放',
					image: 'https://img0.baidu.com/it/u=2635130093,4202492912&fm=26&fmt=auto&gp=0.jpg'
				}, {
					id: 3,
					title: '标题',
					content: '大脑放空士大夫艰苦司法解释基础上开绿灯解放',
					image: 'https://img0.baidu.com/it/u=2635130093,4202492912&fm=26&fmt=auto&gp=0.jpg'
				}]
			}
		},

		onPullDownRefresh() {
			console.log('下拉')
		},
		methods: {
			goDetail(id) {
				this.$navTo('pages/productDetail/productDetail')
			}

		}
	}
</script>

<style lang="scss">
	.product_box {
		display: flex;
		margin-bottom: 32rpx;
	}

	.product_box image {
		width: 250rpx;
		height: 150rpx;
		margin-right: 32rpx;
	}

	.product_content_box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 24rpx;
		color: #919191;
	}

	.product_content_box .title {
		font-size: 28rpx;
		font-weight: bold;
		color: $uni-text-color;
	}
</style>
