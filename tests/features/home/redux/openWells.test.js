import { expect } from 'chai';

import {
  HOME_OPEN_WELLS,
} from 'src/features/home/redux/constants';

import {
  openWells,
  reducer,
} from 'src/features/home/redux/openWells';

describe('home/redux/openWells', () => {
  it('returns correct action by openWells', () => {
    expect(openWells()).to.have.property('type', HOME_OPEN_WELLS);
  });

  it('handles action type HOME_OPEN_WELLS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_OPEN_WELLS }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
