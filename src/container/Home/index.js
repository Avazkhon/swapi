import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import {
  getFilms,
} from 'actions';

import Layout from 'container/Layout';
import Loader from 'widgets/Loader';

import style from './style';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({
    req, res, match, history, location, ...ctx
  }) {
    const { store } = ctx;
    if (store && store.dispatch) {
      await store.dispatch(getFilms());
    }
  }

  componentDidMount() {
    const { getFilms } = this.props;
    getFilms();
  }

  render() {
    const {
      films: {
        data,
        isFetching,
      },
      classes,
    } = this.props;

    return (
      <Layout>
        <div className={classes.home}>
          {
            isFetching && <Loader />
          }
          {
            data
            && (
            <div className={classes['films-list']}>
              {
                data.results.map((film) => (
                  <div key={film.episode_id} className={classes.card}>
                    <Link to={`CardFilm/?id=${film.episode_id}`}>
                      <h4>{film.title}</h4>
                      <img width="80%" src="https://via.placeholder.com/190x120.png" />
                      <p>
                        <strong>Director: </strong>
                        {film.director}
                        {' '}

                      </p>
                      <p>
                        <strong>Producer: </strong>
                        {film.producer}
                      </p>
                      <p>
                        <strong>Release: </strong>
                        {film.release_date}
                      </p>
                    </Link>
                  </div>
                ))
              }
            </div>
            )
          }
        </div>
      </Layout>
    );
  }
}

Home.propType = {
  films: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.shape({}),
    error: PropTypes.shape({}),
  }),
  getFilms: PropTypes.func,
};

function mapStateToProps(state) {
  const {
    films,
  } = state;
  return {
    films,
  };
}

export default injectSheet(style)(
  connect(mapStateToProps, {
    getFilms,
  })(Home),
);
