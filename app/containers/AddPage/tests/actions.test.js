import { changeString } from '../actions';
import { CHANGE_STR } from '../constants';

describe('AddPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CHANGE_STR,
      };
      expect(changeString()).toEqual(expected);
    });
  });
});
