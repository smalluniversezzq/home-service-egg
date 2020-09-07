const Service = require('egg').Service;

  class ArticleService extends Service {
    async lists (params){
      const { app } = this;
      try {
        // const result = '我的世界'
        const result = await app.mysql.select('article');
        return result;
      }catch(err){
        console.log(err);
        return null
      }
    }
  }

  module.exports = ArticleService;