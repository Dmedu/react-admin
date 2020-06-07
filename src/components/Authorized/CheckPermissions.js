/**
 * @name: 权限检查
 * @param { (string | string[]) } authority 准入权限
 * @param { (string | string[]) } currentAuthority 你的权限
 * @param { Element } target 准入组件
 * @param { Element } Exception 不准组件
 * @return: { Element }
 */

const CheckPermissions = (
  authority,
  currentAuthority,
  target,
  Exception
) => {

  // 无权限默认对所有用户开放
  if(!authority){
    return target
  }

  if(Array.isArray(authority)){
    if(Array.isArray(currentAuthority)){
      if(currentAuthority.some(item => authority.includes(item))){
        return target
      }
    }else if(authority.includes(currentAuthority)){
      return target
    }
    return Exception
  }

  if(typeof authority === 'string'){
    if(Array.isArray(currentAuthority)){
      if(currentAuthority.some(item => authority === item)){
        return target
      }
    }else if(currentAuthority === authority){
      return target
    }
    return Exception
  }
  
}

export default CheckPermissions