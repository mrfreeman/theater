import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav id="sc3">
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#/admin">Условия доставки</a></li>
          <li><a href="#about">О Нас</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
