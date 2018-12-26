import { Button, Input } from 'antd';
import propTypes from 'prop-types';
import React from 'react';
import Messages from './MessagesContainer'

import './Landing.css'


class Landing extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      email: '',
      password: '',
    };
  }

  handleOk = () => {
      const { email, password } = this.state

      this.props.signUp(email, password)

      this.setState({ email: '', password: '' })
  }

  onChangeEmail = e => {
      this.setState({ email: e.target.value })
  }

  onChangePassword = e => {
      this.setState({ password: e.target.value })
  }

  render() {
    const { props } = this;

    if (props.isAuthorized) {
        return <Messages />
    }

    return (
      <div className="landing">
        <h2 className="landing-logo">Войдите чтобы начать</h2>

        <div className="create-account">
            <Input className="inp" placeholder="Почта" onChange={this.onChangeEmail} />
            <Input className="inp" placeholder="Пароль" onChange={this.onChangePassword} />
        </div>

        <Button className="but" {...{
            type: 'primary',
            onClick: this.handleOk
        }}>
            Войти
        </Button>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: propTypes.bool.isRequired,
  signUp: propTypes.func.isRequired,
};

export default Landing;
