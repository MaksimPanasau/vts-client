export const clearAlertAction = () => ({ type: 'SET_ALERT', alert: { type: 'danger', message: undefined } });

export const setErrorAction = (message) => ({ type: 'SET_ALERT', alert: { type: 'danger', message } });