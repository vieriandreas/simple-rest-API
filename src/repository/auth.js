const { User } = require('../../models')

class AuthRepository {
    constructor() { }

    async login({ email, password }) {
        try {
            const logAcc = await User.findAll({
                where: {
                    email: email,
                    password: password
                }
            })
            if (logAcc.length === 0) {
                return {
                    statusCode: 404,
                    message: "not found"
                }
            } else {
                return {
                    statusCode: 201,
                    logAcc: logAcc
                }
            }
        } catch (err) {
            return {
                statusCode: 500,
                logAcc: null
            }
        }
    }

    async register({ email, password}) {
        try {
            const createdUser = await User.create({ email, password})
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

module.exports = AuthRepository;