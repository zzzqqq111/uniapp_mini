<template>
	<view>
		<uni-search-bar 
		radius="100" 
		placeholder="自定义圆角" 
		@confirm="search" 
		bgColor='#fff'
		/>
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
		<view class="uni-flex tab_box">
			<view v-for="item in projectTab" :key="item.id" class="tab_item">
				<image :src="item.icon"></image>
				<p>{{item.title}}</p>
			</view>
			
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
					icon: '',
					title: '居家生活'
				},{
					id: 2,
					icon: '',
					title: '手机数码2'
				}, {
					id: 3,
					icon: '',
					title: '领券中心'
				}]
			}
		},
		methods: {

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
	.tab_box{
		justify-content: space-between;
	}
	.tab_item image{
		width: 56px;
		height: 56px;
	}
</style>
