function myFn(a,b){
  console.log(this.name)
  console.log(this.age)
  console.log('myFn.prototype->',myFn.prototype)
  return a + b
}

Function.prototype.myApply = function(context = window,args){
  console.log('this->',this)
  console.log('context->',context)
  context.fn = this; // 先将fn挂在context上，
  console.log('this->',this)
  console.log('args->',...args)
  var res = context.fn(...args); // 然后通过context调用fn，使得fn中的this指向指到context上
  delete context.fn; // 最后删除掉context上的fn
  console.log('res->',res)
  return res; // 返回原函数的返回值
}

export default myFn