import * as actionTypes from 'store/actions/actionTypes';

export const setNavLabelAction = (text) => ({ type: actionTypes.SET_NAV_LABEL, text });

export const showSidebarAction = () => ({ type: actionTypes.SHOW_SIDEBAR });

export const hideSidebarAction = () => ({ type: actionTypes.HIDE_SIDEBAR });
