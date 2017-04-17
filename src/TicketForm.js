//TicketForm.js
import React, { Component } from 'react';
import style from './style';
class TicketForm extends Component {
 constructor(props) {
 super(props);
 this.state = { name: '', text: '' };
 this.handleNameChange = this.handleNameChange.bind(this);
 this.handleTextChange = this.handleTextChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleNameChange(e) {
 this.setState({ name: e.target.value });
 }
 handleTextChange(e) {
 this.setState({ text: e.target.value });
 }
 handleSubmit(e) {
   e.preventDefault();
   let name = this.state.name.trim();
   let text = this.state.text.trim();
   if (!text || !name) {
   return;
   }
   this.props.onTicketSubmit({ name: name, text: text });
   this.setState({ name: '', text: '' });
 }
 render() {
 return (
 <form style={ style.ticketForm } onSubmit={ this.handleSubmit }>
 <input
 type='text'
 placeholder='Название мероприятия'
 style={ style.ticketFormName}
 value={ this.state.name }
 onChange={ this.handleNameChange } />
 <input
 type='text'
 placeholder='Описание'
 style={ style.ticketFormText}
 value={ this.state.text }
 onChange={ this.handleTextChange } />
 <input
 type='submit'
 style={ style.ticketFormPost }
 value='Post' />
 </form>
 )
 }
}
export default TicketForm;
