import { Map } from 'immutable';

const initialState = new Map({
    navLabel: '',
    sidebarVisible: false
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAV_LABEL': return state.set('navLabel', action.text);
        case 'SHOW_SIDEBAR': return state.set('sidebarVisible', true);
        case 'HIDE_SIDEBAR': return state.set('sidebarVisible', false);
        default: return state;
    }
}

export default reducer;
