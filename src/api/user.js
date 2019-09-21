/**
 * 用户相关请求模块
 * 两个好处
 *  便于开发和维护
 *  便于中用
 */
import request from '@/utils/request'

export const login = ({
  mobile,
  code
}) => {
//   const mobile = data.mobile
//   const code = data.code
//   参数解构
//   const { mobile, code } = data
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
    // data: {
    //   mobile: data.mobile,
    //   code: data.code
    // },
    // data
  })
}
