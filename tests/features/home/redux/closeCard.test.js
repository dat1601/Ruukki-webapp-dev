import { expect } from 'chai';

import {
  HOME_CLOSE_CARD,
} from 'src/features/home/redux/constants';

import {
  closeCard,
  reducer,
} from 'src/features/home/redux/closeCard';

describe('home/redux/closeCard', () => {
  it('returns correct action by closeCard', () => {
    expect(closeCard()).to.have.property('type', HOME_CLOSE_CARD);
  });

  it('handles action type HOME_CLOSE_CARD correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_CLOSE_CARD }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
