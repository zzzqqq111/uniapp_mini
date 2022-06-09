<template>
	<view>
		<uni-search-bar radius="100" placeholder="搜索商品" @confirm="search" bgColor='#fff' />
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" speed='50' text="uni-app 1.6版正式发布" />
		<view class="uni-inline-item tab_box padding_25">
			<view v-for="item in projectTab" :key="item.id" class="tab_item">
				<image :src="item.icon"></image>
				<p>{{item.title}}</p>
			</view>
		</view>
		<view class="uni-inline-item tab_box padding_25 title_box">
			<span>热卖推荐</span>
			<span @click="goProduct">更多 > </span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				projectTab: [{
					id: 1,
					icon: 'https://img0.baidu.com/it/u=1000551505,2077899926&fm=26&fmt=auto&gp=0.jpg',
					title: '居家生活'
				}, {
					id: 2,
					icon: 'https://img0.baidu.com/it/u=1000551505,2077899926&fm=26&fmt=auto&gp=0.jpg',
					title: '手机数码'
				}, {
					id: 3,
					icon: 'https://img0.baidu.com/it/u=1000551505,2077899926&fm=26&fmt=auto&gp=0.jpg',
					title: '领券中心'
				}, {
					id: 4,
					icon: 'https://img0.baidu.com/it/u=1000551505,2077899926&fm=26&fmt=auto&gp=0.jpg',
					title: '领券中心'
				}]
			}
		},
		methods: {
			search(value) {
				console.log(value)
			},
			goProduct() {
				uni.getLocation({
					type: 'wgs84',
					success(res) {
						console.log(res)
					}
				})
				// this.$navTo('pages/product/product')
			}
		}
	}
</script>

<style lang="scss">
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}

	.tab_box {
		justify-content: space-between;
		text-align: center;
	}

	.tab_item image {
		width: 56px;
		height: 56px;
	}

	.title_box span:first-child {
		font-size: 36rpx;
		font-weight: bold;
	}
</style>
