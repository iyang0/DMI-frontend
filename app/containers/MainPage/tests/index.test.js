/**
 *
 * Tests for MainPage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import { browserHistory } from 'react-router-dom';

import { MainPage, mapDispatchToProps } from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';
import configureStore from '../../../configureStore';
// import { loadList } from '../../App/actions';

describe('<MainPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should fetch the list of strings on mount', () => {
    const loadListSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <MainPage loadListDispatch={loadListSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(loadListSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('loadListDispatch', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadListDispatch).toBeDefined();
      });

      it('should dispatch loadList when called', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch);
        render(
          <Provider store={store}>
            <IntlProvider locale={DEFAULT_LOCALE}>
              <MainPage loadListDispatch={dispatch} />
            </IntlProvider>
          </Provider>,
        );
        expect(dispatch).toHaveBeenCalledWith();
      });
    });
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const dispatch = jest.fn();
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <MainPage
            loading={false}
            error={false}
            list={[]}
            loadListDispatch={dispatch}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
