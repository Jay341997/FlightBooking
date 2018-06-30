import React, { Component } from 'react';
import {fetchAirportDetails} from './actions'
import { Provider } from "react-redux";
import FlightBooking from  './main'
import configureStore from "./store";
import AvailableFlights from './AvailableFlights'
import Submitform from './SubmitForm'
import { Router,Route,browserHistory } from "react-router"

const store=configureStore();
store.dispatch(fetchAirportDetails());

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={FlightBooking}>
        </Route>
        <Route path="available-flights" component={AvailableFlights}>
        </Route>
        <Route path="book-flight" component={Submitform}>
        </Route>
      </Router>
      </Provider>
    )
  }
}
