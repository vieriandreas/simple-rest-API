class UserService {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }

    async getAll() {
        try {
            const userList = await this.UserRepository.findAll()

            return {
                statusCode: 200,
                users: userList
            }
        } catch (err) {

            return {
                statusCode: 500,
                createdUser: null
            }
        }
    }
}

module.exports = UserService;