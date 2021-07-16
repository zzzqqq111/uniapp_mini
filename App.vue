<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			// 小程序主动更新
			this.updateManager()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			/**
			 * 小程序主动更新
			 */
			updateManager() {
			  const updateManager = uni.getUpdateManager();
			  updateManager.onCheckForUpdate(res => {
			    // 请求完新版本信息的回调
			    // console.log(res.hasUpdate)
			  })
			  updateManager.onUpdateReady(() => {
			    uni.showModal({
			      title: '更新提示',
			      content: '新版本已经准备好，即将重启应用',
			      showCancel: false,
			      success(res) {
			        if (res.confirm) {
			          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			          updateManager.applyUpdate()
			        }
			      }
			    })
			  })
			  updateManager.onUpdateFailed(() => {
			    // 新的版本下载失败
			    uni.showModal({
			      title: '更新提示',
			      content: '新版本下载失败',
			      showCancel: false
			    })
			  })
			}
		}
	}
</script>

<style>
	@import './static/common/uni.css';
	/* 项目基础样式 */
	/* @import "./app.scss"; */
	/*每个页面公共css */
</style>
