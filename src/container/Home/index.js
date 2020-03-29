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
    this.state = {
      isSort: false,
    }
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
    const { getFilms, films: { data } } = this.props;
    if (!data) {
      getFilms();
    }
  }

  handleSort = () => {
    this.setState(prevState =>({ isSort: !prevState.isSort }))
  }

  sortFilms = (films, isSort) => (
    films.sort(function (a, b) {
      if (isSort) {
        if (a.release_date > b.release_date) {
          return -1;
        }
        if (a.release_date < b.release_date) {
          return 1;
        }
        return 0;
      } else {
        if (a.release_date > b.release_date) {
          return 1;
        }
        if (a.release_date < b.release_date) {
          return -1;
        }
        return 0;
      }
    })
  )
  render() {
    const {
      films: {
        data,
        isFetching,
      },
      classes,
    } = this.props;

    const {
      isSort,
    } = this.state;
    const films = data && data.results && this.sortFilms(data.results, isSort);

    return (
      <Layout>
        <div>
          { isFetching && <Loader /> }
          <div  className={classes.btn} onClick={this.handleSort}>
            First { isSort ? ' old' : ' new' }
          </div>
          {
            films
            && (
            <div className={classes['films-list']}>
              {
                films.map((film) => (
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
    data: PropTypes.shape({
      results: PropTypes.arrayOf({
        episode_id: PropTypes.string,
        title: PropTypes.string,
        director: PropTypes.string,
        producer: PropTypes.string,
        release_date: PropTypes.string,
      }),
    }),
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
