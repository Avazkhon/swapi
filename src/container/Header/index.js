import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';


import style from './style';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
    } = this.props;

    return (
      <header className={classes.header}>
        <nav className={classes.nav}>
          <Link to="/">
            <h4>STAR WAR</h4>
          </Link>
          <Link to="/">
            Home
          </Link>
          <a href="mailto: kamalxanovavazxon@gmail.com">
            Support
          </a>
        </nav>
      </header>
    );
  }
}

Header.propType = {
  classes: PropTypes.shape({}),
};
export default injectSheet(style)(Header);
