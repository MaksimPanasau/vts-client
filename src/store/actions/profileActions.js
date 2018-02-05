import * as actionTypes from 'store/actions/actionTypes';
import profile from '@/server/profile';
import vacations from '@/server/vacations';
import EmployeeModel from '@/model/employee';

export const fetchProfileDataAction = () => {
  return ({
    type: actionTypes.FETCH_PROFILE_DATA,
    payload: () => {
      return profile.get('').then(response => ({
        employee: new EmployeeModel(response.data.employee),
        vacations: response.data.vacations,
        balance: response.data.balance
      }));
    }
  });
}

export const submitProfileVacationAction = (vacation) => {
  return ({
    type: actionTypes.SUBMIT_PROFILE_VACATION,
    payload: () => {
      return vacations.post('', vacation)
      .then(response => ({ vacation: response.data.vacation }))
    }
  });
}
