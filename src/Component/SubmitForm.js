import React, { Component } from 'react';
import './submitform.css'
import { connect } from 'react-redux';
class Submitform extends Component {
  render() {

    return (<div>{this.props.added?(
      <div className="mybody">
      <div className="main-form">
      <form className="myform" id="agile-form" action="https://flightbooking.agilecrm.com/formsubmit"  method="GET">
      <fieldset>
      <div style={{display: 'none'}, {height: '0px'}, {width: '0px'}}>
      <input type="hidden" id="_agile_form_name" name="_agile_form_name" value="Download Your Free Copy"></input>
      <input type="hidden" id="_agile_domain" name="_agile_domain" value="flightbooking"></input>
      <input type="hidden" id="_agile_redirect_url" name="_agile_redirect_url" value="#"></input>
      <input type="hidden" id="_agile_api" name="_agile_api" value="tiuskdh36rtd6j0c21cjv27ef6"></input>
      <input type="hidden" id="_agile_document_url" name="_agile_document_url" value=""></input>
      <input type="hidden" id="_agile_confirmation_msg" name="_agile_confirmation_msg" value={"Ticket from " + this.props.tripsDetails.from + " to "+this.props.tripsDetails.to +" on "+this.props.tripsDetails.date + " at price " +this.props.price + " has successfully booked"}></input>
      <input type="hidden" id="_agile_form_id_tags" name="tags" value="Ticket"></input>
      <input type="hidden" id="_agile_form_id" name="_agile_form_id" value="5745865499082752"></input>
      <input id="agilefield-7" name="From" type="hidden" value={this.props.tripsDetails.from}></input>
      <input id="agilefield-10" name="Price" type="hidden" value={this.props.price}></input>
      <input id="agilefield-8" name="To" type="hidden" value={this.props.tripsDetails.to}></input>
      <input id="agilefield-9" name="Date" type="hidden" value={this.props.tripsDetails.date}></input>

      </div>

<div className="agile-group required-control">
  <label className="agile-label" htmlFor="agilefield-1">First Name<span className="agile-span-asterisk"> *</span></label>
  <div className="agile-field-xlarge agile-field">
	<input maxLength="250" id="agilefield-1" name="first_name" type="text" placeholder="Enter first name" className="agile-height-default" required="true"></input>
  </div>
  <div className="agile-custom-clear"></div>
</div>






<div className="agile-group required-control">
  <label className="agile-label" htmlFor="agilefield-6">Last Name<span className="agile-span-asterisk"> *</span></label>
  <div className="agile-field-xlarge agile-field">
	<input maxLength="250" id="agilefield-6" name="last_name" type="text" placeholder="Enter last name" className="agile-height-default" required="true"/>
  </div>
  <div className="agile-custom-clear"></div>
</div>

<div className="agile-group">
  <label className="agile-label" htmlFor="agilefield-3">Email<span className="agile-span-asterisk"> *</span></label>
  <div className="agile-field-xlarge agile-field">
	<input maxLength="250" id="agilefield-3" name="email" type="email" placeholder="Enter email" className="agile-height-default" required="true"/>
  </div>
  <div className="agile-custom-clear"></div>
</div>

<div className="agile-group">
  <label className="agile-label" htmlFor="agilefield-2">Phone</label>
  <div className="agile-field-xlarge agile-field">
	<input maxLength="250" id="agilefield-2" name="phone" type="text" placeholder="Enter work phone" className="agile-height-default"/>
  </div>
  <div className="agile-custom-clear"></div>
</div>


<div className="agile-group">
  <label className="agile-label">&nbsp;</label>
  <div className="agile-field agile-button-field">
    <button type="submit" className="agile-button">Submit</button>
    <br></br><span id="agile-error-msg"></span>
  </div>
</div>

      </fieldset>
      </form>
      </div>
      </div>
    ):(<h3>Loading...</h3>)}</div>)
  }
}

function mapStateToProps(state) {
  return {
           added: state.addContact.added,
           tripsDetails: state.available_flight.trips,
           price: state.addContact.bookFlight,
           flights: state.available_flight.flights,
         }
}

export default connect(mapStateToProps)(Submitform)
