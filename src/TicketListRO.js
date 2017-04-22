//TicketListRO.js
import React, { Component } from 'react';
import TicketLoad from './TicketLoad';
import style from './style';

class TicketListRO extends Component {
 render() {
 let ticketNodes = this.props.data.map(ticket => {
 return (
 <TicketLoad img={ ticket.img } uniqueID={ ticket['_id'] }
  key={ ticket['_id'] } name={ ticket.name } >
 { ticket.text }
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
