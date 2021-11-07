/**
 *
 * MainPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMainPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function MainPage() {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

  return (
    <div>
      <Helmet>
        <title>DMI Takehome - list</title>
        <meta name="description" content="List of strings" />
      </Helmet>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </div>
  );
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
