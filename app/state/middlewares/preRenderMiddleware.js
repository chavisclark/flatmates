/* As seen in: https://github.com/caljrimmer/isomorphic-redux-app 
-------------------------------------------------------------------*/

export default function preRenderMiddleware(dispatch, components, params) {
  return Promise.all(
    components.reduce((previous, current) => {
      return (current.need || []).concat(previous);
    }, []).map(need => dispatch(need(params)))
  );
}
