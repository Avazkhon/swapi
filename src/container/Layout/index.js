import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from 'container/Header';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.StrictMode>
        <Header />
        <content>
          {this.props.children}
        </content>
      </React.StrictMode>
    );
  }
}

Layout.propType = {
};

function mapStateToProps(state) {
  const {
  } = state;
  return {
  };
}

export default connect(mapStateToProps, {
})(Layout);
