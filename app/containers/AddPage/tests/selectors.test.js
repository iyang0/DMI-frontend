import makeSelectAddPage, {
  makeSelectStr,
  selectAddPageDomain,
} from '../selectors';

describe('selectAddPageDomain', () => {
  it('should select the main page state', () => {
    const addPageState = {
      str: '',
    };
    const mockedState = {
      addPage: addPageState,
    };
    expect(selectAddPageDomain(mockedState)).toEqual(addPageState);
  });
});

describe('makeSelectMainPage', () => {
  const mainPageSelector = makeSelectAddPage();
  it('should select the username', () => {
    const mockedState = {
      home: {},
    };
    expect(mainPageSelector(mockedState)).toEqual({});
  });
});

describe('makeSelectStr', () => {
  const usernameSelector = makeSelectStr();
  it('should select the string from form', () => {
    const str = 'ABC';
    const mockedState = {
      addPage: {
        str,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(str);
  });
});
