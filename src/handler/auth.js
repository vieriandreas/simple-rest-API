class AuthHandler {
    constructor(AuthService) {
      this.AuthService = AuthService;
  
      this.login = this.login.bind(this);
      this.register = this.register.bind(this);
    }
  
    async login(req, res) { 
        const payload = req.body;
        const serviceRes = await this.AuthService.login(payload)
console.log (serviceRes)
        res.status(serviceRes.statusCode).send({
            log_acc: serviceRes.logAcc
        })
    }
  
    async register(req, res) {
      const payload = req.body;
      const serviceRes = await this.AuthService.register(payload)
  
      res.status(serviceRes.statusCode).send({
        created_user: serviceRes.createdUser
      })
    }
  }
  
  module.exports = AuthHandler;