/**
 @description: description
 @date: 2018/7/18
 @author: 雷利(Rayleight@baie.com.cn)
 */
export const ENV = "production"

let HOST = {
  beta: "https://n.yunchuangfu.com",  // 测试环境
  production: "https://social.rosepie.com"  // 正式环境
}

let SERVER = `${HOST[ENV]}`
let SERVER_NODE = SERVER+"/api/v1/wechat"
let SERVER_PROXY = SERVER+"/p/eschool"

export const LOGIN = SERVER_NODE+"/login" //登录
export const CURRENT_USER = SERVER_NODE+"/current_user" //更新服务器端unionId信息
export const ENROLL_USER = SERVER_PROXY+"/enroll/user" //获取用户报名信息
export const ENROLL = SERVER_PROXY+"/enroll" //登记新的记录
export const ENROLL_COMPANIES = SERVER_PROXY+"/enroll/companies" //获取所有的公司

export const COURSE_LIST = SERVER_PROXY + "/course/list" //课程列表
export const COURSE_LIST_ENROLL = SERVER_PROXY + "/course/course/canEnroll" //课程预约
export const COURSE_DETAIL = (course_id) => { return `${SERVER_PROXY}/course/courseInfo/courseId/${course_id}` } //课程详情
export const COURSE_ENROLL = (course_id) => { return `${SERVER_PROXY}/enroll/enroll/${course_id}` } //课程报名
export const COURSE_CANCEL = (course_id) => { return `${SERVER_PROXY}/enroll/cancel/${course_id}` } //课程取消
export const COURSE_PLAY = SERVER_PROXY + "/course/course/play"  //课程视频播放

export const EXAM_SUBJECT = SERVER_PROXY + "/subject/subjects"  //考试题目
export const EXAM_ANALYZE = SERVER_PROXY + "/subject/analyze"  //考试解析
export const EXAM_SUBMIT = SERVER_PROXY + "/subject/submit"  //提交答案

export const COURSE_PLAN = SERVER_PROXY + "/course/course/plan/cultivation" //课程计划
export const COURSE_TAG = SERVER_PROXY + "/course/course/tags" //课程标签
export const USER_SCORE = SERVER_PROXY + "/enroll/enroll/getCredits" //用户学分

export const USER_STORE = SERVER_PROXY + "/mine/course/collect/show" //用户收藏
export const USER_SIGN = SERVER_PROXY + "/awards/user/sign" //用户签到
export const USER_SIGN_LIST = SERVER_PROXY + "/mine/sigin/get" //用户签到七天数据
export const USER_SCORE_LIST = SERVER_PROXY + "/mine/credits/list" //用户学分
export const USER_ACTIVITY_LIST = SERVER_PROXY + "/mine/awards/list" //用户活跃值

export const USER_COLLECT = (course_id) => { return `${SERVER_PROXY}/mine/course/${course_id}/collect` } //用户课程收藏
export const USER_COLLECT_CANCEL = (course_id) => { return `${SERVER_PROXY}/mine/course/${course_id}/cancel` } //用户课程收藏
export const USER_COMMENT = SERVER_PROXY + "/course/course/diss/get" //用户课程评论
export const USER_COMMENT_ADD = SERVER_PROXY + "/course/course/diss/add" //用户课程评论提交