/**
 @description: 持续存储相关
 */
const APP_DATA = 'APP_DATA'
/**
 * 更新全局对象数据
 * @param key
 * @param value
 */
export function setGlobalData(key,value,callback) {
    const app=getApp()
    if(app){
        app.globalData[key]=value
        saveGlobalData(callback)
    }
}

/**
 * 从全局对象中获取数据
 * @param key
 * @returns {*}
 */
export function getGlobalData(key) {
    const app=getApp()
    if(app){
        return app.globalData[key]
    }
}

function saveGlobalData(callback) {
    const app=getApp()
    if(app){
        saveItem(APP_DATA,app.globalData).then(()=>{
            if(callback){
                callback()
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
}

/**
 * 保存数据
 * @param key
 * @param data
 * @returns {Promise}
 */
export function saveItem(key, data) {
    return new Promise(function (resolve, reject) {
        if (typeof data === "object") {
            data = JSON.stringify(data)
        }
        uni.setStorage({
            key,
            data,
            success(){
                resolve()
            },
            fail(err){
                reject(err)
            }
        })
    })
}

/**
 * 读取数据
 * @param key
 * @returns {Promise}
 */
export function getItem(key) {
    return new Promise(function (resolve, reject) {
        uni.getStorage({
            key,
            success(res){
                let result=res.data
                try{
                    let temp=JSON.parse(result)
                    if(temp instanceof Object){
                        result=temp
                    }
                }catch(e){
        
                }
                resolve(result)
            },
            fail(err){
                reject(err)
            }
        
        })
    })
}

/**
 * 删除数据
 * @param key
 * @returns {Promise}
 */
export function removeItem(key) {
    if (key instanceof Array) {
        return Promise.reject("暂不支持一次删除多个key")
    }
    return new Promise(function (resolve, reject) {
        uni.removeStorage({
            key,
            success(res){
                resolve(res)
            },
            fail(err){
                reject(err)
            }
        })
    })
}

/**
 * 清空数据
 * @returns {void}
 */
export function clearAllItem() {
    return uni.clearStorage()
}
