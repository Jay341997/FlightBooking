import React, { Component } from 'react';
import AllFlights from './AllFlights';
import FilterOptions from './FilterOptions';
import './Availableflights.css'
import {connect} from "react-redux"
import Sidebar from 'react-sidebar';


class AvailableFlights extends Component{
  constructor(){
    super();
    this.state={sidebarOpen: false};
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render(){
    var sidebarContent = <div className="sidebar"><FilterOptions /></div>;
     return (
      <div className="global-wrap">
      <hr />
      {this.props.fetched?(
          <div className="container">
          <center><h3 className="booking-title">{this.props.flights.length+" Flights from "+ this.props.tripsDetails.from+" to " +this.props.tripsDetails.to+ " on "  +this.props.tripsDetails.date}
            <small>
            </small>
          </h3></center>
          <div className="row">
          <div className="col-md-3" id="Filters">
              <FilterOptions />
          </div>
            <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
               <button className="shrinkFilter btn-info" onClick={(e) => {let ps = this.state.sidebarOpen;this.setState({sidebarOpen:!ps})}}>FILTER</button>
            </Sidebar>


            <div className="col-md-9">
              <div className="nav-drop booking-sort">
                SORT:
                  <select className="nav-drop-menu dropdown" name="Sort">
                    <option value="Price">Price(Low To High)</option>
                    <option value="Duration">Duration</option>
                    <option value="Stops">Stops</option>
                    <option value="Arrival">Arrival</option>
                    <option value="Departure">Departure</option>
                  </select>
              </div>

              <AllFlights />
            </div>
          </div>
          </div>
          )

          :(<h3>Loading...</h3>)
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
           airports: state.airport_details.airportsname,
           flights: state.available_flight.flights,
           tripsDetails: state.available_flight.trips,
           fetched: state.available_flight.fetched
         }
}

export default connect(mapStateToProps)(AvailableFlights)
