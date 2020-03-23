import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import {
  getFilms,
} from 'actions';

import Layout from 'container/Layout';

import style from './style';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getFilms } = this.props;
    getFilms();
  }

  render() {
    const {
      classes,
    } = this.props;

    return (
      <Layout>
        <div className={classes.home}>
          Home
        </div>
      </Layout>
    );
  }
}

Home.propType = {
  getFilms: PropTypes.func,
};

function mapStateToProps(state) {
  const {
  } = state;
  return {
  };
}

export default injectSheet(style)(
  connect(mapStateToProps, {
    getFilms,
  })(Home),
);
