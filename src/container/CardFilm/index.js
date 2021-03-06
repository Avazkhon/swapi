import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import {
  getFilms,
} from 'actions';

import Layout from 'container/Layout';
import ReturnBtn from 'widgets/ReturnBtn';
import Loader from 'widgets/Loader';

import style from './style';

class CardFilm extends React.Component {
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
    const { getFilms, films: { data } } = this.props;
    if (!data) {
      getFilms();
    }
  }

  render() {
    const {
      films: {
        data,
        isFetching,
      },
      classes,
      location,
    } = this.props;

    const { id } = queryString.parse(location.search);
    const film = data && data.results && data.results.find((film) => film.episode_id === +id);

    return (
      <Layout>
        <ReturnBtn />
        {
          isFetching && <Loader />
        }
        {
          film
          && (
          <div className={classes['card-film']}>
            <h4 className={classes.title}>{film.title}</h4>
            <img className={classes.img} src="https://via.placeholder.com/350x120.png" />
            <div className={classes.items}>
              <h4 className={classes.title}>Author</h4>
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
            </div>
            <div className={classes.discription}>
              <h4 className={classes.title}>Discription</h4>
              <p>{film.opening_crawl}</p>
            </div>
            <div>
              <h4 className={classes.title}>People</h4>
              <ul className={classes.people}>
                {
                  film.characters.map((acter) => (
                    <li key={acter}>
                      <Link to={`/people?id=${acter.match(/[0-9]+/g)}`}>
                        {acter}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          )
        }
      </Layout>
    );
  }
}

CardFilm.propType = {
  films: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.shape({
      results: PropTypes.shape({
        title: PropTypes.string,
        director: PropTypes.string,
        producer: PropTypes.string,
        release_date: PropTypes.string,
        opening_crawl: PropTypes.string,
        characters: PropTypes.arrayOf(PropTypes.string),
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
  })(CardFilm),
);
