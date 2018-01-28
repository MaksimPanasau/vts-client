import { Map } from 'immutable';
import EmployeeModel from '../../model/employee';

const initialState = new Map({
  employee: new EmployeeModel(),
  vacations: [],
  loading: false,
  error: null
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_DATA_PENDING':
      return state.set('loading', true);
    case 'FETCH_PROFILE_DATA_FULFILLED':
      return state.set('loading', false)
                  .set('error', null)
                  .set('employee', action.payload.employee)
                  .set('vacations', action.payload.vacations);
    case 'FETCH_PROFILE_DATA_REJECTED':
      return state.set('loading', false)
                  .set('error', action.payload.error);

    case 'SUBMIT_PROFILE_VACATION_PENDING':
      return state.set('loading', true);
    case 'SUBMIT_PROFILE_VACATION_FULFILLED':
      return state.set('loading', false)
                  .set('error', false)
                  .set('vacations', [...state.get('vacations'), action.payload.vacation]);
    case 'SUBMIT_PROFILE_VACATION_REJECTED':
      return state.set('loading', true)
                  .set('error', action.payload);

    default: return state;
  }
}

export default reducer;
