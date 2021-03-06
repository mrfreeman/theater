//Ticket.js
import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Ticket extends Component {
  constructor(props) {
 super(props);
 this.state= {
 toBeUpdated: false,
 name: '',
 text: '',
 img: ''
 };
 //binding all our functions to this class
 this.deleteTicket = this.deleteTicket.bind(this);
 this.updateTicket = this.updateTicket.bind(this);
 this.handleNameChange = this.handleNameChange.bind(this);
 this.handleTextChange = this.handleTextChange.bind(this);
 this.handleImgChange = this.handleImgChange.bind(this);
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
 let img = (this.state.img) ? this.state.img : null;
 let ticket = { name: name, text: text, img: img};
 this.props.onTicketUpdate(id, ticket);
 this.setState({
 toBeUpdated: !this.state.toBeUpdated,
 name: '',
 text: '',
 img: ''
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
 handleImgChange(e) {
 this.setState({ img: e.target.value });
 }
 rawMarkup() {
 let rawMarkup = marked(this.props.children.toString());
 return { __html: rawMarkup };
 }
 render() {
 return (
 <div style={ style.ticket }>
 <h3>{this.props.name}</h3>
 <h4>{this.props.img}</h4>
 <span dangerouslySetInnerHTML={ this.rawMarkup() } />
 <a style={ style.updateLink } href='#' onClick={ this.updateTicket }>update</a>
 <a style={ style.deleteLink } href='#' onClick={ this.deleteTicket }>delete</a>
 { (this.state.toBeUpdated)
 ? (<form onSubmit={ this.handleTicketUpdate }>
 <input
 type='text'
 placeholder='Update name…'
 style={ style.ticketFormName }
 value={ this.state.name }
 onChange={ this.handleNameChange } />
 <input
 type='text'
 placeholder='Update image…'
 style={ style.ticketFormName }
 value={ this.state.img }
 onChange={ this.handleImgChange } />
 <input
 type='text'
 placeholder='Update your comment…'
 style={ style.ticketFormText }
 value={ this.state.text }
 onChange={ this.handleTextChange } />
 <input
 type='submit'
 style={ style.ticketFormPost }
 value='Update' />
 </form>)
 : null}
 </div>
 )
 }
}
export default Ticket;
