/**
 @description: 网络相关
 */
import {getGlobalData,setGlobalData} from './storge'


const TIMEOUT = 60 * 1000

const FETCH_ERROR_MAP = {
    'Network request failed': '网络未连接，请检查网络设置'
}

/**
 * 判断是否位正确的token
 * @param token
 * @returns {boolean}
 */
export function isRightToken(token) {
    return !!(token && token.length > 50)
}


/**
 * 基于 wx.request 封装的 GET请求
 * @param url
 * @param params
 * @param noPre - 不判断error_code
 * @returns {Promise}
 */
export function R_GET(url, params = {}, noPre) {
    return _FETCH(url, params, 'GET', noPre)
}

/**
 * 基于 wx.request 封装的 POST请求
 * @param url
 * @param data
 * @param noPre
 * @returns {Promise}
 */
export function R_POST(url, data = {}, noPre) {
    return _FETCH(url, data, "POST", noPre)
}

/**
 * 基于 wx.request 封装的 PUT请求
 * @param url
 * @param data
 * @param noPre
 * @returns {Promise}
 */
export function R_PUT(url, data = {}, noPre) {
    return _FETCH(url, data, "PUT", noPre)
}

function _FETCH(url, params = {}, method = 'GET', noPre = false) {
    
    let g_token = getGlobalData('token')
    
    if (url == undefined) {
        return Promise.reject("请求地址为空")
    }
    
    
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject('网络请求超时，请检查网络设置')
        }, TIMEOUT)
        
        _fetch()
        
        function _fetch() {
            uni.request({
                url,
                method,
                header: {
                    "authorization": 'Bearer ' + g_token,
                    "content-type": "application/json",
                    'Accept': 'application/json'
                },
                data: params,
                success(result) {
                    const response = result.data
                    if (result.statusCode >= 400) {
                        reject('系统开小差了，请稍后再试或联系客服')
                        return
                    }
                    if (noPre) {
                        //不需要预处理，调用这个方法的地方自己判断
                        resolve(response)
                        return
                    }
                    if (response && response.error) {
                        reject('系统开小差了，请稍后再试或联系客服')
                    } else {
                        resolve(response)
                    }
                },
                fail(err){
                    let errMsg = _parseErrorMsg(err)
                    reject(errMsg)
                }
            })
        }
        
    })
}


/**
 * 处理错误信息
 * @param err
 * @returns {*}
 * @private
 */
function _parseErrorMsg(err) {
    let errText = err
    if (errText && errText.message) {
        errText = errText.message
    }
    if (FETCH_ERROR_MAP[errText]) {
        errText = FETCH_ERROR_MAP[errText]
    }
    
    if (errText && errText.match) {
        if (errText.match('Uncaught SyntaxError') != null) {
            errText = "系统开小差了，请稍后再试或联系客服"
        }
        if (errText.match('Unexpected token') != null) {
            errText = "系统开小差了，请稍后再试或联系客服"
        }
        if (errText.match('JSON Parse error') != null) {
            errText = "系统开小差了，请稍后再试或联系客服"
        }
        if (errText.match('timeout') != null) {
            errText = "系统开小差了，请稍后再试或联系客服"
        }
        if (errText.match('Failed to fetch') != null) {
            errText = "系统开小差了，请稍后再试或联系客服"
        }
    }
    
    if (typeof errText === 'object') {
        errText = JSON.stringify(errText)
    }
    return errText
}
