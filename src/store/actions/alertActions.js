import * as actionTypes from 'store/actions/actionTypes';

export const clearAlertAction = () => ({ type: actionTypes.SET_ALERT, alert: { type: 'danger', message: null } });

export const setErrorAction = (message) => ({ type: actionTypes.SET_ALERT, alert: { type: 'danger', message } });
