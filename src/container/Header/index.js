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
            Home
          </Link>
        </nav>
      </header>
    );
  }
}

Header.propType = {
};

function mapStateToProps(state) {
  const {
    auth,
  } = state;
  return {
    auth,
  };
}

export default injectSheet(style)(
  connect(mapStateToProps, {
  })(Header),
);
