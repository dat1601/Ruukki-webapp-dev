import initialState from './initialState';
import { reducer as closeCardReducer } from './closeCard';
import { reducer as openSolarReducer } from './openSolar';
import { reducer as openWellsReducer } from './openWells';
import { reducer as openPilesReducer } from './openPiles';
import { reducer as getTempReducer } from './getTemp';

const reducers = [
  closeCardReducer,
  openSolarReducer,
  openWellsReducer,
  openPilesReducer,
  getTempReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
