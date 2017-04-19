import React, { Component } from 'react'
import Home from '../Home'
import TicketBox from '../TicketBox';
import '../index.css'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }
  render() {
    let Child

    switch (this.state.route) {
      case '/admin': Child = TicketBox; break;
      default: Child = Home;
    }

    return (
        <Child url='http://localhost:3001/api/tickets' pollInterval={2000} />
    )

  }
}
