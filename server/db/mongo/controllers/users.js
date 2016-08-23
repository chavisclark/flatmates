// TODO: Add login/logout functions 

import User from '../models/user';
import passport from 'passport';

// Won't work until I implement login/logout
export function fetchUser(req, res, next) {
  return res.json(req.user);
}

export default {
  fetchUser
};
