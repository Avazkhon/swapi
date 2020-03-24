import React from 'react';
import injectSheet from 'react-jss';

import style from './style';

const Loader = ({ classes }) => (
  <div className={classes.loader} />
);

export default injectSheet(style)(Loader);
