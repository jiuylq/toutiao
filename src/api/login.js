import request from '@/utils/request'

export function login(pardata) {
  return request({
    url: '/mapi/login',
    method: 'post',
    params: pardata
  })
}
