import { combineReducers, applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import employees from './reducers/employeesReducer';
import alert from './reducers/alertReducer';
import navigation from './reducers/navigationReducer';
import profile from './reducers/profileReducer';
import calendar from './reducers/calendarReducer';

const reducers = combineReducers({
    employees,
    alert,
    navigation,
    profile,
    calendar
});

const middleware = applyMiddleware(createLogger(), thunk, promise());
const store = createStore(reducers, middleware);

export default store;
