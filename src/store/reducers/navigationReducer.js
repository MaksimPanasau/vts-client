import { Map } from 'immutable';

import * as actionTypes from 'store/actions/actionTypes';

const initialState = new Map({
    navLabel: '',
    sidebarVisible: false
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_NAV_LABEL: return state.set('navLabel', action.text);
        case actionTypes.SHOW_SIDEBAR: return state.set('sidebarVisible', true);
        case actionTypes.HIDE_SIDEBAR: return state.set('sidebarVisible', false);
        default: return state;
    }
}

export default reducer;
