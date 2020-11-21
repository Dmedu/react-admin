/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-16 12:30:09
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-16 14:59:16
 */ 
let memoizedState = []
let cursor = 0

export function useState(initialValue){
  memoizedState[cursor] = memoizedState[cursor] || initialValue
  const currentCursor = cursor
  function setState(newState){
    memoizedState[currentCursor]  = newState
    // render()
  }
  return [memoizedState[cursor++] , setState]
}

export function useEffect(callback,depArray){
  const hasNoDeps = !depArray
  const deps = memoizedState[cursor]
  const hasChangedDeps = deps ?
  !depArray.every((el,i)=> el === deps[i]) : true

  if(hasNoDeps || hasChangedDeps){
    callback()
    memoizedState[cursor] = depArray
  }
  cursor++
}