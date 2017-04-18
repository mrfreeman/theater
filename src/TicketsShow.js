//TicketShow.js
import React, { Component } from 'react';
import axios from 'axios';
import TicketListRO from './TicketListRO';
import TicketForm from './TicketForm';
import style from './style';

class TicketBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 this.loadTicketsFromServer = this.loadTicketsFromServer.bind(this);
 }
 loadTicketsFromServer() {
   axios.get(this.props.url)
   .then(res => {
   this.setState({ data: res.data });
 })
 }
componentDidMount() {
this.loadTicketsFromServer();
setInterval(this.loadTicketsFromServer, this.props.pollInterval);
}
 render() {
 return (
 <div style={ style.ticketBox }>
 <h2>Tickets:</h2>
 <TicketListRO  data={ this.state.data } />
 </div>
 )
 }
}
export default TicketBox;
