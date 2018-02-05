import * as actionTypes from 'store/actions/actionTypes';
import employees from '@/server/employees';
import EmployeeModel from '@/model/employee';

export const fetchEmployeesAction = () => {
  return ({
    type: actionTypes.FETCH_EMPLOYEES,
    payload: () => employees.get()
      .then(response => response.data.employees.map(e => new EmployeeModel(e)))
  })
}

export const addEmployeeAction = (employee) => {
  return ({
    type: actionTypes.ADD_EMPLOYEE,
    payload: () => employees.post('', employee)
      .then(response => new EmployeeModel(response.data.employee))
  })
}

export const updateEmployeeAction = (employee) => {
  return ({
    type: actionTypes.UPDATE_EMPLOYEE,
    payload: () => employees.put(`/${employee._id}`, employee)
      .then(response => new EmployeeModel(response.data.employee))
  });
}

export const deleteEmployeeAction = (id) => {
  return ({
    type: actionTypes.DELETE_EMPLOYEE,
    payload: () => employees.delete(`/${id}`)
  });
}
