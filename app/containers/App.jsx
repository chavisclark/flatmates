import React, { PropTypes } from 'react';
import styles from 'css/main';
import classNames from 'classNames/bind';

const cx = classNames.bind(styles);

const App = ({children}) => {
  return (
    <div className={cx('app')}>
      <h1>The server is configured, time for a 🍻 </h1>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};


export default App;
