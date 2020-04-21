import React, { Component } from 'react';
import './App.css';
import Main from './component/Main';
import SignIn from './component/SignIn';

class App extends React.Component {
  state = {
    isLogin: false,
    userId: '',
    password: '',
  };

  handler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signout = () => {
    this.setState({ isLogin: false });
  };

  signIn = () => {
    console.log('singin function');
    if (this.state.userId === 'bilal' && this.state.password === '123') {
      return this.setState({ isLogin: true, userId: '', password: '' });
    } else {
      alert('enter valid user id or password');
    }
    // this.setState({ isLogin: true });
  };

  render() {
    const { userId, password, isLogin } = this.state;
    return (
      <div className="App">
        <div className="Content">
          {!isLogin ? (
            <SignIn
              signIn={this.signIn}
              handler={this.handler}
              userId={userId}
              password={password}
            />
          ) : (
            <Main signout={this.signout} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
