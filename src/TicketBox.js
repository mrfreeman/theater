//TicketBox.js
import React, { Component } from 'react';
import axios from 'axios';
import TicketList from './TicketList';
import TicketForm from './TicketForm';
import style from './style';

class TicketBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 this.loadTicketsFromServer = this.loadTicketsFromServer.bind(this);
 this.handleTicketSubmit = this.handleTicketSubmit.bind(this);
 this.handleTicketDelete = this.handleTicketDelete.bind(this);
 this.handleTicketUpdate = this.handleTicketUpdate.bind(this);
 }
 loadTicketsFromServer() {
   axios.get(this.props.url)
   .then(res => {
   this.setState({ data: res.data });
 })
 }
 handleTicketSubmit(ticket) {
    let tickets = this.state.data;
    ticket._id = Date.now();
    let newTickets = tickets.concat([ticket]);
    this.setState({ data: newTickets });
    axios.post(this.props.url, ticket)
    .catch(err => {
    console.error(err);
    this.setState({ data: tickets });
    });
}
handleTicketDelete(id) {
 //axios.delete('${this.props.url}/${id}')
 var objUrl = this.props.url + '/' + id;
 axios.delete(objUrl)
 .then(res => {
 console.log('Ticket deleted');
 })
 .catch(err => {
 console.error(err);
 });
 }
 handleTicketUpdate(id, ticket) {
 //sends the comment id and new author/text to our api
 var objUrl = this.props.url + '/' + id;
 axios.put(objUrl, ticket)
 .catch(err => {
 console.log(err);
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
 <TicketList  onTicketDelete={ this.handleTicketDelete }
 onTicketUpdate={ this.handleTicketUpdate } data={ this.state.data } />
 <TicketForm onTicketSubmit={ this.handleTicketSubmit } />
 </div>
 )
 }
}
export default TicketBox;
