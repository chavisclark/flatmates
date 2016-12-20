import user from './user';
import outing from './outing';

export { user, outing };

export default (app) => {
  user(app),
  outing(app)
};
