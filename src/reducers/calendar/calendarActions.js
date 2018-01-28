import calendar from '../../server/calendar';

export const fetchHolidaysAction = (year) => {
  return ({
    type: 'FETCH_CALENDAR_HOLIDAYS',
    payload: () => calendar.get('/holidays/' + year)
      .then(response => ({
        year,
        days: response.data.days
      }))
  });
}
