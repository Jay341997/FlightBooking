import React, { Component } from 'react';

class FilterOptions extends Component{

  render(){
    return (
      <div>
        <h3>Filter By:</h3>
          <ul className="list booking-filters-list">
          <hr className="or" /><hr className="or" />
          <li>
            <h4 className="booking-filters-title">Stops:</h4>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Non-Stop
              </label>
            </div>
              <div className="checkbox checkbox-warning">
                <input id="checkbox2" className="styled" type="checkbox" />
                <label htmlFor="checkbox2">
                  1-Stop
                </label>
              </div>
              <div className="checkbox checkbox-warning">
                <input id="checkbox2" className="styled" type="checkbox" />
                <label htmlFor="checkbox2">
                  2-Stop
                </label>
              </div>
          </li>
          <hr className="or" />
          <li>
            <h4 className="booking-filters-title">Price :</h4>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Below $150
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                $150 - $350
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Above $350
              </label>
            </div>
          </li>
          <hr className="or" />
          <li>
            <h4 className="booking-filters-title">Flight Class:</h4>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Economy
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Business
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                First
              </label>
            </div>
          </li>
          <hr className="or" />
          <li>
            <h4 className="booking-filters-title">Airlines:</h4>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Lufthansa
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                American Airlines
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                AirFrance
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Croatia Airlines
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Delta
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Air Canada
              </label>
            </div>
          </li>
          <hr className="or" />
          <li>
            <h4 className="booking-filters-title">Departure Time</h4>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Morning (5:00am - 11:59am)
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Afternoon (12:00pm - 5:59pm)
              </label>
            </div>
            <div className="checkbox checkbox-warning">
              <input id="checkbox2" className="styled" type="checkbox" />
              <label htmlFor="checkbox2">
                Evening (6:00pm - 11:59pm)
              </label>
            </div>
          </li>
          </ul>
        </div>
    )
  }
}

export default FilterOptions;
