import React, { Component } from 'react';
import { connect } from 'react-redux';
import fileDownload from 'react-file-download';

import reports from '@/server/reports';
import Button from 'components/common/Button/Button';
import { setNavLabelAction } from 'store/actions';

@connect(null, dispatch => ({
  setNavLabel: (text) => dispatch(setNavLabelAction(text))
}))
class Vacations extends Component {

  componentDidMount() {
    this.props.setNavLabel('Vacations');
  }

  printReportHandler = () => {
    reports.getReport().then(response => fileDownload(response, 'report.xlsx'));
  }

  render() {
    return (
      <div>
        Vacations Page<br/><br/>
        <Button onClick={this.printReportHandler}>Print Report</Button>
      </div>
    );
  }
}

export default Vacations;
