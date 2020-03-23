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

import style from './style';

class CardFilm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getFilms } = this.props;
    getFilms();
  }

  render() {
    const {
      films: {
        data,
      },
      classes,
      location,
    } = this.props;

    const { id } = queryString.parse(location.search);
    const film = data && data.results && data.results.find((film) => film.episode_id === +id);
    return (
      <Layout>
        {
          film
          && (
          <div key={film.episode_id} className={classes['card-film']}>
            <h4 className={classes.title}>{film.title}</h4>
            <img className={classes.img} src="https://via.placeholder.com/350x120.png" />
            <div className={classes.items}>
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
            <div className={classes.opening}>{film.opening_crawl}</div>
            <ul className={classes.people}>
              {
                film.characters.map((acter) => (
                  <li key={acter}>
                    <Link to={`people?id=${acter.match(/[0-9]+/g)}`}>
                      {acter}
                    </Link>
                  </li>
                ))
              }
            </ul>
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
  })(CardFilm),
);
