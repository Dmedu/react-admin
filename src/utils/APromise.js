/*
 * @Descripttion: 异步编程-promise
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-23 15:29:10
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-27 14:43:19
 * new Promise((resolve, reject)=>{
 *  resolve(value) //成功
 *  reject(reason) //失败
 * }).then( res => {
 *    
 * })
 */
const resolvePromise = (promise2, x, resolve, reject) => {

  // 循环应用自己
  // 即 : then后返回的是自己
  // 提出错误
  if (x === promise2) {
    return reject(
      new TypeError('Chaining cycle detected for promise')
    )
  }

  let called

  // then的返回值:
  // 不能返回 null
  // 如果是类型是object或者函数
  // 如果类型是普通数值,那么直接resolve
  if (
    x != null &&
    ( 
      typeof x === 'object' ||
      typeof x === 'function'
    )
   ) {
    try {

      let then = x.then

      if (typeof then === 'function') {

        then.call(
          x,
          y=>{

            if(called) return

            called = true

            resolvePromise(promise2, y, resolve, reject)
            
          },
          err => {

            if(called) return

            called = true

            reject(err)

          }
        )

      }else{

        resolve(x)
        
      }
    }catch(err){

    }
  }else{

    resolve(x)
    
  }
}
class EZPromise {
  constructor(executor) {

    // 初始化状态：等待
    this.state = 'pending'

    //成功后传的值
    this.value = undefined

    // 失败后传的值
    this.reason = undefined

    // 队列:成功存放的数组
    this.onResolvedCallbacks = []

    // 队列:失败存放的数组
    this.onRejectedCallbacks = []

    // 成功执行
    let resolve = value => {
      if (this.state === 'pending') {
        // 修改状态:成功
        this.state = 'fulfilled'
        // 保存值:成功后的值
        this.value = value

        //执行队列中的所有成功函数
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    // 失败执行
    let reject = reason => {
      if (this.state === 'pending') {
        // 修改状态:失败
        this.state = 'rejected'
        // 保存值:失败后的值
        this.reason = reason

        // 执行队列中的所有失败函数
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      // 实例化参数
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }

  }
 
  then(onFulfilled, onRejected) {
    // 检查onFulfilled类型是否是函数
    // 如果是则继续
    // 如果不是直接返回
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value

    // 检查onRejected类型是否是函数
    // 如果是则继续
    // 如果不是直接抛出错误
    // 如果不是函数执行 value => value则会进入下一个then中
    // 所以在这直接抛出错误
    onRejected = typeof onRejected === "function" ? onRejected : err=> { throw err }

    let promise2 = new EZPromise((resolve, reject) => {

      if (this.state === 'fulfilled') {
        
        // 规定: 异步执行onFulfilled
        setTimeout(()=>{

          // 规定: 如果onFulfilled或onRejected出错直接返回reject
          try{

            let x = onFulfilled(this.value)

            resolvePromise(promise2, x, resolve, reject);

          }catch(error){

            reject(error)
            
          }
          
        },0)
        

      }

      if (this.state === 'rejected') {
        
        // 异步执行onRejected
        setTimeout(()=>{
          
          try{

            let x = onRejected(this.reason)

            resolvePromise(promise2, x, resolve, reject);
            
          }catch(error){
            
            reject(error)

          }

        },0)

      }

      //如果then的调用在resolve之前
      //将then中的回调放入队列中
      //当resolve执行时调用then的回调
      if (this.state === 'pending') {

        this.onResolvedCallbacks.push(
          () => {

            //异步执行onFulfilled
            setTimeout(()=>{

              try{
                
                let x = onFulfilled(this.value)

                resolvePromise(promise2, x, resolve, reject);

              }catch(error){

                reject(error)

              }
              
            },0)

          }
        )

        this.onRejectedCallbacks.push(
          () => {

            // 异步执行onRejected
            setTimeout(()=>{
              
              try{

                let x = onRejected(this.reason)

                resolvePromise(promise2, x, resolve, reject);

              }catch(error){

                reject(error)

              }

            },0)

          }
        )

      }

    })

    return promise2

  }

  catch(fn){
    return this.then(null,fn)
  }
  static test(){
    console.log(123)
  }
}

// 遍历执行列表中的Promise
// 当列表中所有的Promise都执行后则返回一个结果数组
EZPromise.all = (list) => {
  let arr = []
  let j = 0
  let len = list.length
  const processData = (index,data,callback) => {
    arr[index] = data
    j++
    if(j===len){
      callback(arr)
    }
  }
  return new EZPromise((resolve,reject)=>{
    for(let i = 0;i<len;i++){
      list[i].then(res=>{
        processData(i,res,resolve)
      },reject)
    }
  })
}

// 返回一个Promise
// 执行Promise回调中的resolve方法
EZPromise.resolve = (value) => {
  return new EZPromise((resolve,reject)=>{
    resolve(value)
  })
}

// 返回一个Promise
// 执行Promise回调中的reject方法
EZPromise.reject = (value) => {
  return new EZPromise((resolve,reject)=>{
    reject(value)
  })
}

//
EZPromise.race = (list) => {
  return new EZPromise((resolve,reject)=>{
    for(let i = 0; i< list.length;i++){
      list[i].then(resolve,reject)
    }
  })
  
}
export default EZPromise
