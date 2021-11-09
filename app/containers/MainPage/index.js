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
import reducer from 'containers/App/reducer';
import makeSelectMainPage from './selectors';
import saga from './saga';
import messages from './messages';
import StringList from '../../components/StringList';

// key is for what context for the selector to get from the store
const key = 'global';

export function MainPage({ loading, error, list, loadListDispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const stringsListProps = {
    loading,
    error,
    list,
  };

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
      <StringList {...stringsListProps} />
    </div>
  );
}

MainPage.propTypes = {
  loadListDispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
  list: makeSelectList(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
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
