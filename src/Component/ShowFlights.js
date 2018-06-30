import React, { Component } from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

class ShowFlight extends Component{
  constructor(){
    super();
    this.state = {display:false}
  }

  handleSelect()
  {
    this.props.dispatch({type: 'ADDED_FALSE'})
    console.log(this.props.id);
    this.props.dispatch({type: 'ADD_CONTACT_FULFIELD',payload: this.props.total})
    browserHistory.push("/book-flight");
  }
  render(){
     return (
       <ul className="booking-list">
         <li>
           <div className="booking-item-container">
             <div className="booking-item" onClick={() => {let ps = this.state.display;ps=!ps;this.setState({display:ps});console.log(this.state.display);}}>
               <div className="row">
                 <div className="col-md-2">
                   <div className="booking-item-airline-logo">
                     <p>{this.props.aircraft}</p>
                   </div>
                 </div>
                 <div className="col-md-5">
                   <div className="row booking-item-flight-details">
                     <div className="col-md-6 booking-item-departure">
                       <div className="row">
                         <i className="col-md-3 fa fa-plane"></i>
                         <div className="leftside col-md-9">
                           <h3>{this.props.departure_time}</h3>
                           <h4 className="booking-item-date">{this.props.departure_date}</h4>
                         </div>
                         <h4 className="booking-item-destination">{this.props.tripsDetails.from}</h4>
                       </div>

                     </div>
                     <div className="col-md-6 booking-item-arrival">
                       <div className="row">
                         <i className="col-md-3 fa fa-plane fa-flip-vertical"></i>
                         <div className="leftside col-md-9">
                           <h3>{this.props.arrival_time}</h3>
                           <h4 className="booking-item-date">{this.props.arrival_date}</h4>
                         </div>
                         <h4 className="booking-item-destination">{this.props.tripsDetails.to}</h4>
                       </div>

                     </div>
                   </div>
                 </div>
                 <div className="col-md-2 showTotalTime">
                   <h3>{this.props.duration}</h3>
                   <p>{this.stops}</p>
                 </div>

                 <div className="col-md-3 showFareAndBook">
                   <span className="booking-item-price"><i className="fa fa-inr"></i>{this.props.total}</span><span>/person</span>
                   <p className="booking-item-flight-class">Class: Economy</p>
                   <button className="submit btn btn-warning" type="submit" onClick={this.handleSelect.bind(this)}>Select</button>
                 </div>
               </div>
             </div>

             {this.state.display ? (
             <div id="Fligh_Details" className="booking-item-details">
               <div className="row">
                 <div className="col-md-8">
                   <p>Flight Details</p>
                   <hr />
                   <h5 className="list-title">{this.props.tripsDetails.from} to {this.props.tripsDetails.to}</h5>
                   <ul className="list">
                     <li>{this.props.carrier} - {this.props.carrier_no}</li>
                     <li>Economy / Coach Class ( M ), {this.props.aircraft}</li>
                     <li>Departure {this.props.departure_time}  ||||  Arrive {this.props.arrival_time}</li>
                     <li>Duration: {this.props.duration}</li>
                   </ul>
                   <hr />
                   <p>Total trip time: {this.props.duration}</p>
                 </div>
               </div>
             </div>
           ) : null
           }
           </div>
         </li>
       </ul>

     );
  }
}
function mapStateToProps(state) {
  return {
           added: state.addContact.bookFlight.added,
           airports: state.airport_details.airportsname,
           flights: state.available_flight.flights,
           tripsDetails: state.available_flight.trips
         }
}

export default connect(mapStateToProps)(ShowFlight);
