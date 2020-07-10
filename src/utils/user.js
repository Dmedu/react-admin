/*
 * @Descripttion: 用户信息
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-04 16:38:01
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-10 15:31:30
 */
import { setUserInfo, signOut } from '@/store/action/login'
import Store from '@/store'

const user = {
  // 更新-保存
  save: (user, auth) => {
    console.log(Object.prototype.toString.call(user) === "[object Object]")
    if (Object.prototype.toString.call(user) === "[object Object]") {
      console.log(user?.currentAuthority)
      if (!user?.currentAuthority) {
        console.log(auth)
        if (
          auth && 
          Array.isArray(auth) && 
          auth.length
        ) {
          user.currentAuthority = auth
        }
        
      }
      console.log(user)
      sessionStorage.setItem('userInfo', [JSON.stringify(user)])
      Store.dispatch(setUserInfo(user))

    } else {
      console.error(
        'error->',
        'User type should be object'
      )
    }
    
  },
  // 删除
  delete: () => {
    sessionStorage.removeItem('userInfo')
    Store.dispatch(signOut())
  },
  // 检查是否存在
  exist:() => {
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    console.log(userInfo)
    
    if(userInfo){
      user.save(userInfo)
    }

    return userInfo ? 
    true : false
  }
}

export default user