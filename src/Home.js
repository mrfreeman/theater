import React, { Component } from 'react'
import TicketsShow from './TicketsShow'
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'
import Slider from 'react-slick';
import './index.css'

export default class Home extends Component {

  render() {

    return (
    <div>
      <Navbar />
      <div className="content">
          <TicketsShow url='http://localhost:3001/api/tickets' pollInterval={2000} />
      </div>

      <About />
      <Footer />
    </div>
    )
  }
}
