import makeSelectMainPage, { selectMainPageDomain } from '../selectors';

describe('selectMainPageDomain', () => {
  it('should select the main page state', () => {
    const homeState = {};
    const mockedState = {
      home: homeState,
    };
    expect(selectMainPageDomain(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectMainPage', () => {
  const mainPageSelector = makeSelectMainPage();
  it('should select the username', () => {
    const mockedState = {
      home: {},
    };
    expect(mainPageSelector(mockedState)).toEqual({});
  });
});
