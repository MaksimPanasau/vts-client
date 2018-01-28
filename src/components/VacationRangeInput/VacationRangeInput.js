import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { Slider } from 'primereact/components/slider/Slider';
import moment from 'moment';

import { fetchHolidaysAction } from '../../reducers/calendar/calendarActions';
import VacationDayBox from '../VacationDayBox/VacationDayBox';
import Backdrop from '../Backdrop/Backdrop';
import './VacationRangeInput.css';

function isSameDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return a.date() === b.date() &&
    a.month() === b.month() &&
    a.year() === b.year();
}

@connect(store => ({
  holidays: store.calendar.get('holidays'),
  calendarLoading: store.calendar.get('loading')
}),
dispatch => ({
  fetchHolidays: (year) => dispatch(fetchHolidaysAction(year))
}))
class VacationRangeInput extends Component {

  state = {
    isOpen: false,
    date: null,
    focusedInput: false,
    adjustedDayIndex: 0,
    days: []
  }

  componentDidMount() {
    this.handleDateChange(this.state.date);
    const currentYear = moment().year();
    for (let year = currentYear - 1; year < currentYear + 10; year++) {
      if (!this.props.holidays.get(year)) {
        this.props.fetchHolidays(year);
      }
    }
  }

  handleDateChange = (date) => {
    if (date) {
      const days = [...this.state.days];
      const filtered = days.filter(day => !isSameDay(day.moment, date));

      if (days.length === filtered.length) {
        filtered.push({
          moment: moment(date),
          hours: 8
        });
      }

      this.setState({ date, days: filtered });
      this.props.onChange(filtered);
      this.setState({ isOpen: false });
    }
  }

  handleDayAdjust = (index) => {
    this.setState({
      adjustedDayIndex: index
    });
  }

  onChangeSlider = (e) => {
    const days = [...this.state.days];
    const index = this.state.adjustedDayIndex;
    if (index || index === 0) {
      days[index].hours = e.value;
      this.setState({ days });
      this.props.onChange(days);
    }
  }

  getHolidays = (year) => {
    if (this.props.holidays.get(year)) {
      return this.props.holidays.get(year).get('days') || [];
    } else {
      return null;
    }
  }

  render() {
    const adjustedDay = this.state.days.length ? this.state.days[this.state.adjustedDayIndex] : null;
    return (
      <div className="VacationRangeInput">
        <button onClick={() => this.setState({ focusedInput: !this.state.focusedInput })} >select dates</button>
        {
          this.state.focusedInput &&
          <Fragment>
            <Backdrop clicked={() => this.setState({ focusedInput: false }) } />
            <SingleDatePicker
                id="date_input"
                date={this.state.date}
                focused={this.state.focusedInput}
                onDateChange={this.handleDateChange}
                onFocusChange={() => {}}
                isDayHighlighted={date => {
                  const days = [...this.state.days];
                  const index = days.findIndex(day => isSameDay(day.moment, date));
                  return index > -1;
                }}
                isDayBlocked={date => {
                  const holidays = this.getHolidays(date.year());
                  if (!holidays) {
                    return true;
                  }
                  const index = holidays.findIndex(day => {
                    return isSameDay(moment(day.moment), date)
                  });
                  return index > -1 || date.isoWeekday() > 5;
                }}
              />
          </Fragment>
        }

        <div className="DayDetails">
          { this.state.days.map((day, iday) =>
            <VacationDayBox day={day} onClick={() => this.handleDayAdjust(iday)} active={iday === this.state.adjustedDayIndex} />
          ) }
        </div>
        {
          adjustedDay &&
          <div>
            Editing { adjustedDay.moment.format('DD/MM/YYYY') }
            <br/>
            <br/>
            <div>{adjustedDay.hours}h</div>
            <br/>
            <Slider style={{ width: '200px', zIndex: 0 }} min={1} max={8} value={adjustedDay.hours} onChange={this.onChangeSlider} />
            <br/>
          </div>
        }
        <div>
          Total:
        </div>
      </div>
    );
  }
}

export default VacationRangeInput;
