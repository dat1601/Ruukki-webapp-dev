import { expect } from 'chai';

import {
  HOME_OPEN_PILES,
} from 'src/features/home/redux/constants';

import {
  openPiles,
  reducer,
} from 'src/features/home/redux/openPiles';

describe('home/redux/openPiles', () => {
  it('returns correct action by openPiles', () => {
    expect(openPiles()).to.have.property('type', HOME_OPEN_PILES);
  });

  it('handles action type HOME_OPEN_PILES correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_OPEN_PILES }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
