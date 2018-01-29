import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { hideSidebarAction } from 'store/actions';

import './SidebarItem.css';

@connect(null,
dispatch => ({
  hideSidebar: () => dispatch(hideSidebarAction())
}))
class SidebarItem extends React.Component {
  render() {
    const { label, command, path, icon } = this.props;
    return (
      <Link to={path || '/'} className={`SidebarItem ${icon}`} onClick={ () => {
        command && command();
        this.props.hideSidebar();
      }}>
        <span>{ label }</span>
      </Link>
    );
  }
}

export default SidebarItem;
