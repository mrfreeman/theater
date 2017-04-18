import React, { Component } from 'react'
import TicketsShow from './TicketsShow'

export default class Home extends Component {

  render() {
    return (
      <TicketsShow url='http://localhost:3001/api/tickets' pollInterval={2000} />
    )
  }
}
