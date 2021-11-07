/**
 *
 * MainPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectList,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadList } from 'containers/App/actions';
import makeSelectMainPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'mainPage';

export function MainPage({ loading, error, list, loadListDispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  console.log(loading);
  console.log(error);
  console.log(list);

  useEffect(() => {
    // load strings on mount
    loadListDispatch();
  }, []);

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
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadListDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
  list: makeSelectList(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadListDispatch: () => dispatch(loadList()),
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
