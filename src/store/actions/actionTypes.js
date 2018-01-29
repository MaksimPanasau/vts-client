export const SET_ALERT = 'SET_ALERT';
export const FETCH_HOLIDAYS = 'FETCH_HOLIDAYS';
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const SET_NAV_LABEL = 'SET_NAV_LABEL';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';
export const FETCH_PROFILE_DATA = 'FETCH_PROFILE_DATA';
export const SUBMIT_PROFILE_VACATION = 'SUBMIT_PROFILE_VACATION';

export const pendingFor = (type) => type + '_PENDING';
export const fulfilledFor = (type) => type + '_FULFILLED';
export const rejectedFor = (type) => type + '_REJECTED';
