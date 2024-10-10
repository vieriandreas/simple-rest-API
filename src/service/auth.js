class AuthService {
    constructor(AuthRepository) {
        this.AuthRepository = AuthRepository;
    }

    async login({ email, password }) {
        try {
            const logAcc = await this.AuthRepository.login({
                email,
                password
            })
           return logAcc
        } catch (err) {
            return {
                statusCode: 500,
                logAcc: null
            }
        }
    }

    async register({ email, password }) {
        try {
            const createdUser = await this.AuthRepository.register({ email, password })
            console.log(createdUser)
            return {
                statusCode: 201,
                createdUser: createdUser
            }
        } catch (err) {
            console.log(email, password, err)
            return {
                statusCode: 500,
                createdUser: null
            }
        }
    }
}

module.exports = AuthService;