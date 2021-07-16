  
export const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    
    return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":")
}

export const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : "0" + n
}


export function R_alert(config) {
    if(typeof config === "string"){
        config={content:config}
    }
  const { title = "提示", content = "", showCancel = false, cancelText = "取消", confirmText = "确定", success = () => { } } = config
    icon.showModal({
        title,
        content,
        success,
        showCancel,
        cancelText,
        confirmText,
        confirmColor:"#EA5503"
    })
}

export function R_confirm(config) {
    const {title="提示",content="",success=()=>{},fail=()=>{}}=config
    uni.showModal({
        title,
        content,
        success,
        fail,
        confirmColor:"#EA5503"
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
    'pages/user/index'
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

//日期转毫秒
export function DateToMs(time) {
    let date = time || new Date().getTime()
    return (new Date(typeof (date) === 'string' ? date.replace(/-/g, '/') : date)).getTime();
}

//计算剩余时间
export function leftTimer(t1, t2) {

    let time1 = new Date(typeof (t1) === 'string' ? t1.replace(/-/g, '/') : t1)
    let time2 = new Date(typeof (t2) === 'string' ? t2.replace(/-/g, '/') : t2)
    let timeDiff = time2.getTime() - new Date(time1).getTime()

    timeDiff < 0 && (timeDiff = -timeDiff)

    let days = Math.floor(timeDiff / (24 * 3600 * 1000))

    let leave1 = timeDiff % (24 * 3600 * 1000)
    let hours = Math.floor(leave1 / (3600 * 1000))

    let leave2 = leave1 % (3600 * 1000)
    let minutes = Math.floor(leave2 / (60 * 1000))

    let leave3 = leave2 % (60 * 1000)
    let seconds = Math.round(leave3 / 1000)

    return days ? days + "天" : (hours <= 9 ? '0' : '') + (hours ? hours + ":" : '0:') + (minutes <= 9 ? '0' : '') + (minutes ? minutes + ":" : '0:') + (seconds <= 9 ? '0' : '') + (seconds ? seconds : '0')
}