import React, { Component } from 'react'
import TicketsShow from './TicketsShow'
import Navbar from './Navbar'
import Delivery from './Delivery'
import Footer from './Footer'
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
      <Delivery />
      <Footer />
    </div>
    )
  }
}
