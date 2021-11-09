/**
 *
 * Tests for StringList
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import StringList from '../index';

describe('<StringList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<StringList />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render the loading indicator when its loading', () => {
    const { container } = render(<StringList loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing is provided', () => {
    const { container } = render(
      <StringList list={false} error={false} loading={false} />,
    );

    expect(container.firstChild).toBeNull();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<StringList />);
    expect(firstChild).toMatchSnapshot();
  });
});
