import * as util from './util.js'

export function R_alert(config) {
	if (typeof config === "string") {
		config = {
			content: config
		}
	}
	const {
		title = "提示", content = "", showCancel = false, cancelText = "取消", confirmText = "确定", success = () => {}
	} = config
	uni.showModal({
		title,
		content,
		success,
		showCancel,
		cancelText,
		confirmText,
		confirmColor: "#EA5503"
	})
}

export function R_confirm(config) {
	const {
		title = "提示", content = "", success = () => {}, fail = () => {}
	} = config
	uni.showModal({
		title,
		content,
		success,
		fail,
		confirmColor: "#EA5503"
	})
}

/**
 * 显示纯文字提示框
 */
export const showToast = msg => {
	uni.showToast({
		title: msg,
		icon: 'none'
	})
}

/**
 * 加载更多列表数据
 * @param {Object} resList 新列表数据
 * @param {Object} oldList 旧列表数据
 * @param {int} pageNo 当前页码
 */
export const getEmptyPaginateObj = () => {
	return util.cloneObj(paginate)
}

/**
 * 加载更多列表数据
 * @param {Object} resList 新列表数据
 * @param {Object} oldList 旧列表数据
 * @param {int} pageNo 当前页码
 */
export const getMoreListData = (resList, oldList, pageNo) => {
	// 如果是第一页需手动制空列表
	if (pageNo == 1) oldList.data = []
	// 合并新数据
	return oldList.data.concat(resList.data)
}

/**
 * tabBar页面路径列表 (用于链接跳转时判断)
 * tabBarLinks为常量, 无需修改
 */
export const getTabBarLinks = () => {
	const tabBarLinks = [
		'pages/index/index',
		'pages/my/my',
		'pages/shopCard/shopCard',
		'pages/category/category'
	]
	return tabBarLinks
}

/**
 * 跳转到指定页面url
 * 支持tabBar页面
 * @param {string}  url
 * @param {object}  query
 */
export const navTo = (url, query = {}) => {
	if (!url || url.length == 0) {
		return false
	}
	console.log(util)
	// tabBar页面, 使用switchTab
	if (util.inArray(url, getTabBarLinks())) {
		uni.switchTab({
			url: `/${url}`
		})
		return true
	}
	// 生成query参数
	const queryStr = !util.isEmpty(query) ? '?' + util.urlEncode(query) : ''
	// 普通页面, 使用navigateTo
	uni.navigateTo({
		url: `/${url}${queryStr}`
	})
	return true
}
