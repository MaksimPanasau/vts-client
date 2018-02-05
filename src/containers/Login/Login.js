import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import Input from 'components/common/Input/Input';
import Button from 'components/common/Button/Button';
import { login } from '@/functions/loginFunctions';
import { setNavLabelAction } from 'store/actions';

import './Login.css';

@translate('translations')
@connect()
class Login extends React.Component {

    state = {
      email: '',
      password: '',
    }

    componentDidMount = () => {
      this.props.dispatch(setNavLabelAction(this.props.t('navigation.label.login')));
    }

    handleInput = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }

    render() {
      const { t } = this.props;
      return (
        <div className="Login" >
          <Input id="login-email" name="email" label={t('login.email')} onChange={this.handleInput} />
          <Input id="login-password" name="password" label={t('login.password')} type="password" onChange={this.handleInput} />
          <Button bsStyle="primary" onClick={ () => login(this.state.email, this.state.password) }>{t('login.login')}</Button>
        </div>
      );
    }
};

export default Login;
