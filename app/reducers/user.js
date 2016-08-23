export default function user(state = {
  isLogin: true,
  message: '',
  isWaiting: false,
  authenticated: false,
  info: {},
  }, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}
