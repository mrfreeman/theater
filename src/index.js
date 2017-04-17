import React from 'react';
import ReactDOM from 'react-dom';
import TicketBox from './TicketBox';
import style from './style';
//import './index.css';

ReactDOM.render(
 <TicketBox
 url='http://localhost:3001/api/tickets'
 pollInterval={2000} />,
 document.getElementById('root')
);
