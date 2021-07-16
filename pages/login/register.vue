<template>
	<view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<span>姓名</span>
				<input class="uni-input" name="name" placeholder="请输入姓名" />
			</view>
			<view class="uni-form-item uni-column">
				<span>电话</span>
				<input class="uni-input" name="phone" placeholder="请输入电话" />
			</view>
			<view class="uni-form-item uni-column">
				<span>银行</span>
				<input class="uni-input" name="card" placeholder="请输入银行卡号" />
			</view>
			<view class="uni-form-item uni-column" style="flex-direction: column;">
				<span>上传文件</span>
				<view style="display: flex;margin-top: 16px;">
					<view class="uploadBtn">
						<block v-if="imageSrc">
							<image :src="imageSrc" class="image" mode="widthFix"></image>
						</block>
						<block v-else>
							<view class="uni-hello-addfile" @click="chooseImage('imageSrc')">+ 选择图片</view>
						</block>
					</view>
					<view class="uploadBtn">
						<block v-if="imageSrc1">
							<image :src="imageSrc1" class="image" mode="widthFix"></image>
						</block>
						<block v-else>
							<view class="uni-hello-addfile" @click="chooseImage('imageSrc1')">+ 选择图片</view>
						</block>
					</view>
				</view>
			</view>
			<button form-type="submit" class="submitBtn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageSrc: '',
				imageSrc1: '',
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			chooseImage: function(field) {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						console.log('chooseImage success, temp path is', res.tempFilePaths[0])
						var imageSrc = res.tempFilePaths[0]
						uni.uploadFile({
							url: 'https://unidemo.dcloud.net.cn/upload',
							filePath: imageSrc,
							fileType: 'image',
							name: 'data',
							success: (res) => {
								console.log('uploadImage success, res is:', res)
								uni.showToast({
									title: '上传成功',
									icon: 'success',
									duration: 1000
								})
								this[field] = imageSrc
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.album'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #EEEEEE;
		font-size: 14px;
	}

	.uni-form-item {
		background: #FFFFFF;
		padding: 8px 16px;
		border-bottom: 1px solid #e7e7e7;
		display: flex;
		justify-content: space-between;
	}

	input {
		width: 70%;
		color: #333333;
		text-align: right;
	}

	.submitBtn {
		background: $uni-main-color;
		margin-top: 20px;
		color: #FFFFFF;
		border-radius: 20px;
		height: 44px;
		line-height: 44px;
		width: 80%;
		font-size: 14px;
	}

	.uploadBtn {
		width: 125px;
		height: 125px;
		background: #FFFFFF;
		border: 1px solid #e8e8e8;
		text-align: center;
		line-height: 125px;
		margin-right: 16px;
	}

	.uploadBtn image {
		width: 100%;
	}
</style>
