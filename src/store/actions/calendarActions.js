import * as actionTypes from 'store/actions/actionTypes';

import calendar from '../../server/calendar';

export const fetchHolidaysAction = (year) => {
  return ({
    type: actionTypes.FETCH_HOLIDAYS,
    payload: () => calendar.get('/holidays/' + year)
      .then(response => ({
        year,
        days: response.data.days
      }))
  });
}
