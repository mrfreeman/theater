import React, { Component } from 'react'
import TicketsShow from './TicketsShow'
import Navbar from './Navbar'
import style from './style'
import './index.css'

export default class Home extends Component {

  render() {
    return (
    <div>
      <Navbar />
      <div class="content">
          <TicketsShow url='http://localhost:3001/api/tickets' pollInterval={2000} />
      </div>
      <footer>
        <a href="#home">msk-bilet.com</a> | 2017
      </footer>
    </div>
    )
  }
}
