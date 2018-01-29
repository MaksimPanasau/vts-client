import { Map } from 'immutable';

import EmployeeModel from '@/model/employee';
import { pendingFor, fulfilledFor, rejectedFor } from 'store/actions/actionTypes';
import * as actionTypes from 'store/actions/actionTypes';

const initialState = new Map({
  employee: new EmployeeModel(),
  vacations: [],
  loading: false,
  error: null
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case pendingFor(actionTypes.FETCH_PROFILE_DATA):
      return state.set('loading', true);
    case fulfilledFor(actionTypes.FETCH_PROFILE_DATA):
      return state.set('loading', false)
                  .set('error', null)
                  .set('employee', action.payload.employee)
                  .set('vacations', action.payload.vacations);
    case rejectedFor(actionTypes.FETCH_PROFILE_DATA):
      return state.set('loading', false)
                  .set('error', action.payload.error);

    case pendingFor(actionTypes.SUBMIT_PROFILE_VACATION):
      return state.set('loading', true);
    case fulfilledFor(actionTypes.SUBMIT_PROFILE_VACATION):
      return state.set('loading', false)
                  .set('error', false)
                  .set('vacations', [...state.get('vacations'), action.payload.vacation]);
    case rejectedFor(actionTypes.SUBMIT_PROFILE_VACATION):
      return state.set('loading', true)
                  .set('error', action.payload);

    default: return state;
  }
}

export default reducer;
