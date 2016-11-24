import React, { PropTypes } from 'react';
import '../css/util/normalize.css';
import '../css/util/skeleton.css';
  if (process.env.BROWSER){
    require('../css/custom.scss')
  }
const App = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};


export default App;
