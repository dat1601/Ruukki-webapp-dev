// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_CLOSE_CARD,
} from './constants';

export function closeCard() {
  return {
    type: HOME_CLOSE_CARD,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_CLOSE_CARD:
      return {
        ...state,
        toggleBG: !state.toggleBG || true,
        toggleSolar: !state.toggleSolar || true,
        togglePiles: !state.togglePiles || true,
        toggleWells: !state.toggleWells || true,
      };

    default:
      return state;
  }
}
