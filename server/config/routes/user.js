import { controllers } from '../../db';

const usersController = controllers && controllers.users;

export default (app) => {
// Won't work until I implement login/logout
    app.get('/user',  usersController.fetchUser);
};