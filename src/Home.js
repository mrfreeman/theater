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
        <li><a href="#" title="Home">Home</a></li>
        <li><a href="#" title="Blog">Blog</a></li>
        <li><a href="#/admin" title="Work">Work</a></li>
        <li><a href="#" title="Resources">Resources</a></li>
        <li><a href="#" title="Meta">Meta</a></li>
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
