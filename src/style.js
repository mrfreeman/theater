//style.js
const style = {
 contentBox: {
 width:'60vw',
 margin:'0 auto',
 fontFamily:'Helvetica, sans-serif',
 },
 ticketBoxEdit: {
 width:'90vw',
 height: '10vw',
 margin:'0 auto',
 fontFamily:'Helvetica, sans-serif',
 "textAlign": "center"
 },
 title: {
 textAlign:'center',
 textTransform:'uppercase'
 },
 ticketList: {
   "display": "flex",
   "border": "0px solid #CAD0D2",
   "borderRadius": "1px",
   "overflow": "hidden",
   "flexFlow": "row wrap"
 },
 ticket: {
   //"flex": "1 1 0%",
   "flex": "0 1 calc(25% - 10px)",
   "flexGrow": "1",
   "display": "inline-block",
   "border": "none",
   "borderRadius": "0",
   "justifyContent": "center",
   "alignItems": "center",
   "padding": "15px 0",
   "textAlign": "center",
   "color": "#606060",
   //"backgroundColor": "#f5f5f5"
   //"width": "calc(100% * (1/4) - 10px - 1px)"

 },
 ticketListEdit: {
   "display": "flex",
   "border": "1px solid #CAD0D2",
   "borderRadius": "1px",
   "overflow": "scroll"
 },
 ticketForm: {
 margin:'10px',
 display:'flex',
 flexFlow:'row wrap',
 justifyContent:'space-between'
 },
 ticketFormName: {
 minWidth:'150px',
 margin:'3px',
 padding:'0 10px',
 borderRadius:'3px',
 height:'40px',
 flex:'2'
 },
 ticketFormText: {
 flex:'4',
 minWidth:'400px',
 margin:'3px',
 padding:'0 10px',
 height:'40px',
 borderRadius:'3px'
 },
 ticketFormPost: {
 minWidth:'75px',
 flex:'1',
 height:'40px',
 margin:'5px 3px',
 fontSize:'1rem',
 backgroundColor:'#A3CDFD',
 borderRadius:'3px',
 color:'#fff',
 textTransform:'uppercase',
 letterSpacing:'.055rem',
 border:'none'
 },
 updateLink: {
 textDecoration:'none',
 paddingRight:'15px',
 fontSize:'.7rem'
 },
 deleteLink: {
 textDecoration:'none',
 paddingRight:'15px',
 fontSize:'.7rem',
 color:'red'
 },
 textCenter: {
 "textAlign": "center"
 }
}
module.exports = style;
