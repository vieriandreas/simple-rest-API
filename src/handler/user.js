class UserHandler {
    constructor(UserService) {
      this.UserService = UserService
  
      this.getAll = this.getAll.bind(this);
    }
  
  
    async getAll(req, res) {
      const serviceRes = await this.UserService.getAll()
  
      res.status(serviceRes.statusCode).send({
        users: serviceRes.users
      })
    }
  }
  
  module.exports = UserHandler;