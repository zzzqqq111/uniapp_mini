<template>
	<view>
		<view class="wx_info_box" v-if="userInfo.openId">
			<image src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg">
			</image>
			<view class="wx_right_info">
				<p>慕名而来</p>
				<p>15703412890</p>
			</view>
		</view>
		<view v-else class="wx_info_box" @click="handleLogin">
			<image src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg">
			</image>
			<p>登录<br />点击登录</p>
		</view>
		<ul>
			<li v-for="item in arr" :key='item.id' @click='goHref'>
				<view>
					<image :src="item.icon" />
					<span>{{item.title}}</span>
				</view>
				<span>&gt;</span>
			</li>
		</ul>
		<button class="logoutClass">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				arr: [{
					id: 1,
					icon: 'https://cdn.zxhj618.com/share/upload/zxhj-main/10623319607068694430.jpg',
					title: '我的收藏',
					path: ''
				}, {
					id: 2,
					icon: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
					title: '审批列表',
					path: ''
				}, {
					id: 3,
					icon: 'static/images/my/about.png',
					title: '关于我们',
					path: ''
				}]
			}
		},
		methods: {
			goHref() {
				console.log('test')
			},
			// 跳转到登录页
			handleLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
		}
	}
</script>

<style lang="scss">
	page {
		background: #EEEEEE;
	}
 
	.wx_info_box {
		display: flex;
		align-items: center;
		padding: 50rpx 0 25rpx;
		background-color: #fbf7ef;
		color: #ddc290;
		font-size: 30rpx;
		font-weight: bold;
		line-height: 48rpx;
	}

	.wx_info_box image {
		width: 128rpx;
		height: 128rpx;
		border-radius: 50%;
		margin-right: 24rpx;
	}

	.wx_info_box p:first-child {
		margin-bottom: 10rpx;
	}

	.logoutClass {
		color: #333333;
		background: #FFFFFF;
		margin: 24rpx 0;
		padding: 16rpx 0;
		font-size: 28rpx;
	}

	ul li {
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 16rpx;
		background: #FFFFFF;
		padding: 0 24rpx;
		font-size: 28rpx;
	}

	ul li view {
		display: flex;
		align-items: center;
	}

	ul li image {
		width: 48rpx;
		height: 48rpx;
		margin-right: 16rpx;
		border-radius: 50%;
	}
</style>
