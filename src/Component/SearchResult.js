import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchResult extends Component {
    render() {
        return(

            <div>
                        <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>AirCraft</th>
                                  <th>AirPort</th>
                                  <th>Carrier</th>
                                  <th>City </th>
                                </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                   <td></td>
                                 </tr>
                              </tbody>
                            </table>
                      </div>
            )
       }
}


function mapStateToProps(state) {
    return {
      data:state.search
    };

    console.log(state);
}

export default connect(mapStateToProps)(SearchResult);
