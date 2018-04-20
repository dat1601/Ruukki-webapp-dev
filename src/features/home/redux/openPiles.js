// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_OPEN_PILES,
} from './constants';

export function openPiles() {
  return {
    type: HOME_OPEN_PILES,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_OPEN_PILES:
      return {
        ...state,
        toggleBG: !state.toggleBG && false,
        togglePiles: !state.togglePiles && false,
      };

    default:
      return state;
  }
}
