import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  HOME_GET_TEMP_BEGIN,
  HOME_GET_TEMP_SUCCESS,
  HOME_GET_TEMP_FAILURE,
  HOME_GET_TEMP_DISMISS_ERROR,
} from 'src/features/home/redux/constants';

import {
  getTemp,
  dismissGetTempError,
  reducer,
} from 'src/features/home/redux/getTemp';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/getTemp', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getTemp succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getTemp())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', HOME_GET_TEMP_BEGIN);
        expect(actions[1]).to.have.property('type', HOME_GET_TEMP_SUCCESS);
      });
  });

  it('dispatches failure action when getTemp fails', () => {
    const store = mockStore({});

    return store.dispatch(getTemp({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', HOME_GET_TEMP_BEGIN);
        expect(actions[1]).to.have.property('type', HOME_GET_TEMP_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissGetTempError', () => {
    const expectedAction = {
      type: HOME_GET_TEMP_DISMISS_ERROR,
    };
    expect(dismissGetTempError()).to.deep.equal(expectedAction);
  });

  it('handles action type HOME_GET_TEMP_BEGIN correctly', () => {
    const prevState = { getTempPending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_TEMP_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getTempPending).to.be.true;
  });

  it('handles action type HOME_GET_TEMP_SUCCESS correctly', () => {
    const prevState = { getTempPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_TEMP_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getTempPending).to.be.false;
  });

  it('handles action type HOME_GET_TEMP_FAILURE correctly', () => {
    const prevState = { getTempPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_TEMP_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getTempPending).to.be.false;
    expect(state.getTempError).to.exist;
  });

  it('handles action type HOME_GET_TEMP_DISMISS_ERROR correctly', () => {
    const prevState = { getTempError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_TEMP_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getTempError).to.be.null;
  });
});
