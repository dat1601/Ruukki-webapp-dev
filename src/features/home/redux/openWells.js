// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_OPEN_WELLS,
} from './constants';

export function openWells() {
  return {
    type: HOME_OPEN_WELLS,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_OPEN_WELLS:
      return {
        ...state,
        toggleBG: !state.toggleBG && false,
        toggleWells: !state.toggleWells && false,
      };

    default:
      return state;
  }
}
