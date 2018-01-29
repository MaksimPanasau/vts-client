import { Map, List } from 'immutable';

import { pendingFor, fulfilledFor, rejectedFor } from 'store/actions/actionTypes';
import * as actionTypes from 'store/actions/actionTypes';

const initialState = new Map({
  employees: new List(),
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case pendingFor(actionTypes.FETCH_EMPLOYEES):
      return state.set('loading', true);
    case fulfilledFor(actionTypes.FETCH_EMPLOYEES):
      return state.set('loading', false)
                  .set('employees', new List(action.payload));
    case rejectedFor(actionTypes.FETCH_EMPLOYEES):
      return state.set('loading', false);

    case pendingFor(actionTypes.ADD_EMPLOYEE):
      return state.set('loading', true);
    case fulfilledFor(actionTypes.ADD_EMPLOYEE):
      return state.set('loading', false)
                  .set('employees', state.get('employees').push(action.payload));
    case rejectedFor(actionTypes.ADD_EMPLOYEE):
      return state.set('loading', false);

    case pendingFor(actionTypes.UPDATE_EMPLOYEE):
      return state.set('loading', true);
    case fulfilledFor(actionTypes.UPDATE_EMPLOYEE):
      const employees = state.get('employees');
      const employeeIndex = employees.findIndex(e => e.id === action.id);
      if (employeeIndex !== -1) {
        return state.set('loading', false)
                    .set('employees', state.get('employees').set(employeeIndex, action.employee));
      }
      return state.set('loading', false);
    case rejectedFor(actionTypes.UPDATE_EMPLOYEE):
      return state.set('loading', false);

    case pendingFor(actionTypes.DELETE_EMPLOYEE):
      return state.set('loading', true);
    case fulfilledFor(actionTypes.DELETE_EMPLOYEE):
      return state.set('loading', false)
                  .set('employees', state.get('employees').filter(e => e.id !== action.id));
    case rejectedFor(actionTypes.DELETE_EMPLOYEE):
      return state.set('loading', false);

    default: return state;
  }
}

export default reducer;
