//TicketList.js
import React, { Component } from 'react';
import Ticket from './Ticket';
import style from './style';

class TicketList extends Component {
 render() {
 let ticketNodes = this.props.data.map(ticket => {
 return (
 <Ticket img={ ticket.img } uniqueID={ ticket['_id'] }
 onTicketDelete={ this.props.onTicketDelete }
 onTicketUpdate={ this.props.onTicketUpdate } key={ ticket['_id'] }>
 { ticket.name }<br/>
 { ticket.text }
 </Ticket>
 )
 })
 return (
 <div style={ style.ticketListEdit }>
 { ticketNodes }
 </div>
 )
 }
}
export default TicketList;
