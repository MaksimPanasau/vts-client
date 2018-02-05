import { Map } from 'immutable';

import { pendingFor, fulfilledFor, rejectedFor } from 'store/actions/actionTypes';
import * as actionTypes from 'store/actions/actionTypes';

const initialState = new Map({
  holidays: new Map(),
  loading: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case pendingFor(actionTypes.FETCH_HOLIDAYS):
      return state.set('loading', true);
    case fulfilledFor(actionTypes.FETCH_HOLIDAYS):
      return state.set('loading', false)
                  .set('holidays',
                        state.get('holidays').set(action.payload.year, new Map({ days: action.payload.days })));
    case rejectedFor(actionTypes.FETCH_HOLIDAYS):
      return state.set('loading', false);
    default: return state;
  }
}

export default reducer;
