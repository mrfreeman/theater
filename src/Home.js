import React, { Component } from 'react'
import TicketsShow from './TicketsShow'
import style from './style'
import Radium from 'radium'
import './index.css'

export default class Home extends Component {

  render() {
    return (
  <div>
    <nav id="sc3">
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Условия доставки</a></li>
        <li><a href="#/admin">Контакты</a></li>
        <li><a href="#">О Нас</a></li>
      </ul>
  </nav>
  <div class="content">
      <TicketsShow url='http://localhost:3001/api/tickets' pollInterval={2000} />
  </div>
</div>
    )
  }
}
Home = Radium(Home);
