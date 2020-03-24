import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import {
  getUser,
} from 'actions';

import Layout from 'container/Layout';
import ReturnBtn from 'widgets/ReturnBtn';
import Loader from 'widgets/Loader';

import style from './style';

const profile = [
  { key: 'name', label: 'name' },
  { key: 'height', label: 'height' },
  { key: 'mass', label: 'mass' },
  { key: 'hair_color', label: 'hair color' },
  { key: 'skin_color', label: 'skin color' },
  { key: 'eye_color', label: 'eye color' },
  { key: 'birth_year', label: 'birth year' },
  { key: 'gender', label: 'gender' },
  { key: 'created', label: 'created' },
  { key: 'edited', label: 'edited' },
];
class CardUser extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({
    req, res, match, history, location, ...ctx
  }) {
    const { store } = ctx;
    if (store && store.dispatch) {
      const { id } = req.query;
      await store.dispatch(getUser(id));
    }
  }

  componentDidMount() {
    const { getUser, location } = this.props;
    const { id } = queryString.parse(location.search);
    getUser(id);
  }

  render() {
    const {
      user: {
        data,
        isFetching,
      },
      classes,
    } = this.props;

    const user = data;
    return (
      <Layout>
        <ReturnBtn />
        {
          isFetching && <Loader />
        }
        <div className={classes.user}>
          <img className={classes.img} src="https://via.placeholder.com/350x120.png" />
          <div className={classes.profile}>
            <h4 className={classes.title}>Specifications</h4>
            <ul>
              {
              user && profile.map(({ key, label }) => {
                const props = user[key];
                if (!props) return;
                return (
                  <li key={key}>
                    <strong>
                      {label}
                      :
                      {' '}
                    </strong>
                    <span>{props}</span>
                  </li>
                );
              })
            }
            </ul>
          </div>
          <div className={classes.films}>
            <h4 className={classes.title}>Films</h4>
            <ul>
              {
                user && user.films.map((film) => (
                  <li key={film}>
                    <Link to={`CardFilm/?id=${film.match(/[0-9]+/g)}`}>{film}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

CardUser.propType = {
  user: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.shape({}),
    error: PropTypes.shape({}),
  }),
  getUser: PropTypes.func,
};

function mapStateToProps(state) {
  const {
    user,
  } = state;
  return {
    user,
  };
}

export default injectSheet(style)(
  connect(mapStateToProps, {
    getUser,
  })(CardUser),
);
