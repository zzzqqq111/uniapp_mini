<template>
	<view>
		<MpWeiXin v-if="!isShowUserInfo" @success="onGetUserInfoSuccess" />
		<Register v-else />
	</view>
</template>

<script>
	import MpWeiXin from './mp-weixin.vue'
	import Register from './register.vue'
	export default {
		components: {
			MpWeiXin,
			Register
		},
		data() {
			return {
				isShowUserInfo: false,
			}
		},
		onLoad() {
			console.log(wx.canIUse('getUserProfile'), 'show')
			this.isShowUserInfo = wx.canIUse('getUserProfile')
		},
		methods: {
			onGetUserInfoSuccess(){}
		}
	}
</script>

<style>

</style>
