import React, { Component } from 'react';
import {fetchData} from './actions'
import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { connect } from 'react-redux';
import './firstpage.css';
import {browserHistory} from 'react-router'

const classes = [
    {value: 'Economy',label: 'Economy'},
    {value: 'Premium Economy',label: 'Premium Economy'},
    {value: 'Business' ,label: 'Business'},
    {value: 'FirstClass', label: 'FirstClass'}
];


class FlightBooking extends Component {

  constructor(props){
    super(props);
    this.state = {from: '', to: '', departure_date: moment(),cls: 'Economy'}
    this.handleChange=this.handleChange.bind(this);
  }

handleInput(e)
{
  this.setState({from: e});
}
handleInput2(e)
{
  this.setState({to: e});
}
handlerSubmit(){
    this.props.dispatch({type: 'FETCHED_FALSE'})
    this.props.dispatch({type: 'ADDED_FALSE'})
  if(this.state.from===this.state.to)
  {
    alert('Error: Departure and Destination cant be same');
  }
  else
  {
      const date=new Date(this.state.departure_date.format());
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var dt = date.getDate();
      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }

      const data={
        Origin_Code : this.state.from.value,
        Dest_Code : this.state.to.value,
        start_Date: year+'-' + month + '-'+dt,
      }

      this.props.dispatch(fetchData(data));
      browserHistory.push("/available-flights")
  }

}
handleChange(e)
{
   this.setState({departure_date: e});
}

render() {

  const filterOptions = createFilterOptions({ options: this.props.filters });
   const filterclasses = createFilterOptions({ classes });
    return (
     <div className="bdy">
      <div className="main-agileinfo">
        <div className="form2">
							<div className="from">
								<h3>From</h3>
                <Select name="from_airport" className="class1" value={this.state.from} options={this.props.airport_details} filterOptions={filterOptions} onChange={this.handleInput.bind(this)}  placeholder="Type Departure City"/>
							</div>
							<div className="to">
								<h3>To</h3>
								  <Select name="from_airport" className="class1" value={this.state.to} options={this.props.airport_details} filterOptions={filterOptions} onChange={this.handleInput2.bind(this)} placeholder="Type Destination City"/>
							</div>
							<div className="clear"></div>
							<div className="date">
								<div className="depart">
									<h3>DepartureDate</h3>
                  <DatePicker monthsShown={2}
                 selected={this.state.departure_date}
              onSelect={this.handleChange}  minDate={moment()} />
								</div>
								<div className="clear"></div>
							</div>
							<div className="class">
								<h3>Class</h3>
                <Select name="from_airport"  value={this.state.cls} className="class1 required" options={classes} filterOptions={filterclasses} onChange={val => this.setState({cls: val})} />
              </div>
								<div className="clear"></div>
							<div className="clear"></div>
						<button className="submit"  onClick={this.handlerSubmit.bind(this)} disabled={!Boolean(this.state.from && this.state.to && this.state.departure_date.format())}>Search Flights</button>
        </div>

     </div>
    </div>
     )
 }
}
function mapStateToProps(state) {
  return { airport_details: state.airport_details.airport_details,
           filters: state.airport_details.filter,
           flights: state.available_flight.flights
         }
}

export default connect(mapStateToProps)(FlightBooking)
