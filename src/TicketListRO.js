//TicketListRO.js
import React, { Component } from 'react';
import TicketLoad from './TicketLoad';
import style from './style';

class TicketListRO extends Component {
 render() {
 let ticketNodes = this.props.data.map(ticket => {
 return (
 <TicketLoad name={ ticket.name } uniqueID={ ticket['_id'] }
  key={ ticket['_id'] }>
 { ticket.text}
 </TicketLoad>
 )
 })
 return (
 <div style={ style.ticketList }>
 { ticketNodes }
 </div>
 )
 }
}
export default TicketListRO;
