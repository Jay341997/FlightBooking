import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShowFlight from './ShowFlights';


class AllFlights extends Component{
  constructor(){
    super();
    this.state = {display:false,data: []}
  }
  componentWillMount(){
    var count=0;
    this.props.flights.map(data=>
    {
      count++;
      const total=data.total.substring(3);
      this.state.data.push(<ShowFlight total={total} aircraft={data.aircraft} duration={data.duration} departure_time={data.departure_time} arrival_time={data.arrival_time} stops={data.stops} carrier={data.carrier} carrier_no={data.carrier_no}
        departure_date={data.departure_date} arrival_date={data.arrival_date} key={count} id={count} />);
    })
  }
  render(){
    return (
      <div>
      {this.state.data}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
           airports: state.airport_details.airportsname,
           flights: state.available_flight.flights,
           tripsDetails: state.available_flight.trips
         }
}
export default connect(mapStateToProps)(AllFlights)
