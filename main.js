const express = require('express');
const app = express();
const port = 3000;

//import repo
const UserRepository = require('./src/repository/user');
const AuthRepository = require('./src/repository/auth');
//import service
const UserService = require('./src/service/user');
const AuthService = require('./src/service/auth');
//import handler
const UserHandler = require('./src/handler/user');
const AuthHandler = require('./src/handler/auth');

app.use(express.json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);

const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);
const authHandler = new AuthHandler(authService);

app.get('/users', userHandler.getAll);

app.post('/auth/login', authHandler.login);
app.post('/auth/register', authHandler.register);


app.get('/', (req, res) => {
    res.send(404).send({
        status: "fail",
        message: "not found"
    })
  })
  
  app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
  })