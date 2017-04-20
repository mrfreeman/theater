//Ticket.js
import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class TicketLoad extends Component {
  constructor(props) {
 super(props);
 this.state= {
 toBeUpdated: false,
 name: '',
 text: ''
 };
 //binding all our functions to this class
 this.deleteTicket = this.deleteTicket.bind(this);
 this.updateTicket = this.updateTicket.bind(this);
 this.handleNameChange = this.handleNameChange.bind(this);
 this.handleTextChange = this.handleTextChange.bind(this);
 this.handleTicketUpdate = this.handleTicketUpdate.bind(this);
 }
 updateTicket(e) {
 e.preventDefault();
 //brings up the update field when we click on the update link.
 this.setState({ toBeUpdated: !this.state.toBeUpdated });
 }
 handleTicketUpdate(e) {
 e.preventDefault();
 let id = this.props.uniqueID;
 //if author or text changed, set it. if not, leave null and our PUT
 //request will ignore it.
 let name = (this.state.name) ? this.state.name : null;
 let text = (this.state.text) ? this.state.text : null;
 let ticket = { name: name, text: text};
 this.props.onTicketUpdate(id, ticket);
 this.setState({
 toBeUpdated: !this.state.toBeUpdated,
 name: '',
 text: ''
 })
 }
 deleteTicket(e) {
 e.preventDefault();
 let id = this.props.uniqueID;
 this.props.onTicketDelete(id);
 console.log('oops deleted');
 }
 handleTextChange(e) {
 this.setState({ text: e.target.value });
 }
 handleNameChange(e) {
 this.setState({ name: e.target.value });
 }
 rawMarkup() {
 let rawMarkup = marked(this.props.children.toString());
 return { __html: rawMarkup };
 }
 render() {
   var imgUrl = this.props.name;
   var divStyle = {
    backgroundImage: "url(" + imgUrl + ")"
}
 return (
 <div style={ style.ticket }>
 <img src={ this.props.name }  />
  <span dangerouslySetInnerHTML={ this.rawMarkup() } />
 </div>
 )
 }
}
export default TicketLoad;
