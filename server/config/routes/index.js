import user from './user';
import flat from './flat';

export { user, flat };

export default (app) => {
  user(app),
  flat(app)
};
