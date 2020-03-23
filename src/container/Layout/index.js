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
        <div className="content">
          {this.props.children}
        </div>
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
