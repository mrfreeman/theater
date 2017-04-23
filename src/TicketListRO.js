//TicketListRO.js
import React, { Component } from 'react';
import TicketLoad from './TicketLoad';
import Slider from 'react-slick';
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
 var page1 = ticketNodes.slice(0,8); //ticket pages collections
 var page2 = ticketNodes.slice(9,17); //TODO: sorting by lodash
 var settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1
 };
 //console.log(ticketNodes[0]);
 return (
   <Slider {...settings}>
    <div style={ style.ticketList }>{page1}</div>
    <div style={ style.ticketList }>{page2}</div>
   </Slider>
 )
 }
}
export default TicketListRO;
