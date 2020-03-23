import React from 'react';
import injectSheet from 'react-jss';
import style from './style.js';

const ReturnBtn = ({ classes }) => (
  <div className={classes.btn} onClick={() => { window.history.back(); }}>
    {'<<'}
    {' '}
    BACK
  </div>
);

export default injectSheet(style)(ReturnBtn);
