import React from 'react'
import logo from './logo.png'
import './styles.css'

export default class UserComponentCover extends React.Component {
  render() {
    return (
      <div className="UserCover">
        <header className="UserCover-header">
          <img src={logo} className="UserCover-logo" alt="logo" />
          <p>
            Bienvenue !
          </p>
        </header>
      </div>
    );
  }
}