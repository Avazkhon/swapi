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

  componentDidMount() {
    const { getUser, location } = this.props;
    const { id } = queryString.parse(location.search);
    getUser(id);
  }

  render() {
    const {
      user: {
        data,
      },
      classes,
    } = this.props;

    const user = data;
    return (
      <Layout>
        <div className={classes.user}>
          <img className={classes.img} src="https://via.placeholder.com/350x120.png" />
          <ul className={classes.profile}>
            {
            user && profile.map(({ key, label }) => {
              const props = user[key];
              if (!props) return;
              return (
                <li key={key}>
                  <strong>{label}</strong>
                  <span>{props}</span>
                </li>
              );
            })
          }
          </ul>
          <ul className={classes.films}>
            {
            user && user.films.map((film) => (
              <li key={film}>
                <Link to={`CardFilm/?id=${film.match(/[0-9]+/g)}`}>{film}</Link>
              </li>
            ))
          }
          </ul>
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
