import * as Immutable from 'seamless-immutable';

import * as consts from '../consts/actionTypes';
const initialState = Immutable({
  requests: {
    global: 0
  },
  errors: {}
});

export default (state = initialState, action: any) => {
  switch (action.type) {
    case consts.START_NETWORK: {
      return state.updateIn(['requests', action.payload || 'global'], (counter: number) => (counter || 0) + 1);
    }
    case consts.END_NETWORK: {
      return state.updateIn(['requests', action.payload || 'global'], (counter: number) => counter - 1);
    }
    case consts.SET_NETWORK_ERRORS: {
      return state.setIn(['errors', action.payload.name], action.payload.error);
    }
    default:
      return state;
  }
};

// Selectors
export const getRequestsCount = (state: any, name: string = 'global') => state.requests[name] || 0;