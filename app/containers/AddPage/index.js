/**
 *
 * AddPage
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
import makeSelectAddPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Form from './Form';
import Input from './Input';
import Button from './Button';

export function AddPage() {
  useInjectReducer({ key: 'addPage', reducer });
  useInjectSaga({ key: 'addPage', saga });

  return (
    <div>
      <Helmet>
        <title>DMI Takehome - add string</title>
        <meta
          name="description"
          content="Form to add a string to list of strings"
        />
      </Helmet>
      <Form>
        <label htmlFor="str">
          <Input id="str" type="text" placeholder="Type any string." />
          <Button>
            <FormattedMessage {...messages.button} />
          </Button>
        </label>
      </Form>
    </div>
  );
}

AddPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addPage: makeSelectAddPage(),
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
)(AddPage);
