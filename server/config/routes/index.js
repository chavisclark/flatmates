import user from './user';
import flat from './flat';
import outing from './outing';

export { user, flat };

export default (app) => {
  user(app),
  flat(app),
  outing(app)
};
