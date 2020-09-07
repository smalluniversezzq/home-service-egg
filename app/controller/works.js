const Controller = require('egg').Controller;

class MyWork extends Controller {
  async lists(){
    const {ctx} = this;
    const result = await ctx.service.workService.lists();
    if(result){
      ctx.body={
        code:0,
        data:result,
        msg:"获取成功"
      }
    }else{
      ctx.body= {
        code:1,
        msg:"获取失败"
      }
    }
  }
}

module.exports = MyWork;