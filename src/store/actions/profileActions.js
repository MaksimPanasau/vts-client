import * as actionTypes from 'store/actions/actionTypes';
import employees from '@/server/employees';
import vacations from '@/server/vacations';
import EmployeeModel from '@/model/employee';

export const fetchProfileDataAction = () => {
  return ({
    type: actionTypes.FETCH_PROFILE_DATA,
    payload: () => {
      return employees.get('/me').then(response => {
        return Promise.resolve({ employee: new EmployeeModel(response.data) });
      })
      .catch(error => {
        if (error) {
          return Promise.reject({ error: 'Employee model not found' });
        }
      })
      .then((data) => {
        return vacations.get('/my').then(response => {
          return { ...data, vacations: response.data.vacations };
        });
      });
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
