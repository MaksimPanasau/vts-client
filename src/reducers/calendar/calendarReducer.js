import { Map } from 'immutable';

const initialState = new Map({
  holidays: new Map(),
  loading: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_CALENDAR_HOLIDAYS_PENDING':
      return state.set('loading', true);
    case 'FETCH_CALENDAR_HOLIDAYS_FULFILLED':
      return state.set('loading', false)
                  .set('holidays',
                        state.get('holidays').set(action.payload.year, new Map({ days: action.payload.days })));
    case 'FETCH_CALENDAR_HOLIDAYS_REJECTED':
      return state.set('loading', false);
    default: return state;
  }
}

export default reducer;
