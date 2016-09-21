import React, { PropTypes } from 'react';
import 'css/util/normalize.css';
import 'css/util/skeleton.css';

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
