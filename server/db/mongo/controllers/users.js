import User from '../models/user';
import passport from 'passport';

/*
 * Login
 */
export function login(req, res, next) {
  // email and password validation for the server
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) return next(authErr);
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    user.location = req.body.currentLocation;
    user.save();

    return req.logIn(user, (loginErr) => {
      if (loginErr) return res.status(401).json({ message: loginErr });
      return res.status(200).json({
        user: user,
        message: 'You have been successfully logged in.'
      });
    });
  })(req, res, next);
}

/*
 * Logout
 */
export function logout(req, res) {
  req.logout();
  res.redirect('/');
}

/*
 * Local signup
 */
export function signUp(req, res, next) {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    location: req.body.currentLocation
  });

  User.findOne({ email: req.body.email }, (findErr, existingUser) => {
    if (existingUser) {
      return res.status(409).json({ message: 'Account with this email address already exists!' });
    }

    return user.save((saveErr) => {
      if (saveErr) return next(saveErr);
      return req.logIn(user, (loginErr) => {
        if (loginErr) return res.status(401).json({ message: loginErr });
        return res.status(200).json({
          user: user,
          message: 'You have been successfully logged in.'
        });
      });
    });
  });
}

/*
 * Edit User
 */
export function editUser(req, res, next) {
  if (req.user){
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
      if (err) {
        return next(err);
      } else {
        return res.status(200).json({
          message: 'Your info has been successfully transported '
        });
      }
    });   
  }
}

/*
 * Get User info
 */
export function fetchUser(req, res, next) {
  return res.json(req.user);
}

export default {
  login,
  logout,
  signUp,
  fetchUser,
  editUser
};
