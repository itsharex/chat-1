
import request from '@/utils/request'
//好友列表
export function getFriend_list(params) {
    return request({
        url: '/friend/list',
        method: 'get',
        params
    })
}
//添加好友
export function postAdd_friend(data) {
    return request({
        url: '/friend/add_friend',
        method: 'post',
        data
    })
}
//搜索好友
export function getSearch(params) {
    return request({
        url: '/friend/search',
        method: 'get',
        params
    })
}