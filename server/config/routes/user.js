import { controllers } from '../../db';

const usersController = controllers && controllers.users;

export default (app) => {
    app.get('/user',  usersController.fetchUser);
    app.post('/login', usersController.login);
    app.post('/signup', usersController.signUp);
    app.post('/logout', usersController.logout);
    app.post('/dashboard',  usersController.editUser);
};