import { expect } from 'chai';

import {
  HOME_OPEN_SOLAR,
} from 'src/features/home/redux/constants';

import {
  openSolar,
  reducer,
} from 'src/features/home/redux/openSolar';

describe('home/redux/openSolar', () => {
  it('returns correct action by openSolar', () => {
    expect(openSolar()).to.have.property('type', HOME_OPEN_SOLAR);
  });

  it('handles action type HOME_OPEN_SOLAR correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_OPEN_SOLAR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
