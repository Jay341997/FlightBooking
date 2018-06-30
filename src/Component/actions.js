import React from 'react';
import axios from 'axios';

export  function fetchAirportDetails(){
  return dispatch =>{
    fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
    .then(response =>response.json())
    .then( data => {
      const str=[];
      const option=[];
      const airports=[];
      data.map( itr => {
      let flight =itr.code+":" + itr.city + " (" +itr.name+")";
      const temp=(<div>
                  <div className="row city no-gutters">
                  {itr.city}<span className="code">({itr.code})</span>
                  </div>
                  <div className="name">
                  {itr.name}
                  </div>
                  </div>
                  );
        str.push({value: itr.code,label: temp});
        option.push({value: itr.code,label: flight});
        airports.push({code: itr.code,city: itr.city,name: itr.name})
    })
      dispatch({type: "FETCH_DETAILS_FULFILLED",payload: str})
      dispatch({type: "FETCH_DETAILS_FILTER",payload: option})
      dispatch({type: "FETCH_DETAILS",payload: airports})
    })
    .catch((err)=>{
      dispatch({type: "FETCH_DETAILS_REJECTED",payload: err})
    })
  }
}



export function fetchData(requestParam) {
	console.log("requestParam",requestParam);
	return function(dispatch) {
		  return axios({
		    method: 'post',
		    url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyC8YVAkzSSKj2nN8hE96Ev4ua802UaBQfk',
		    data: JSON.stringify({
					  "request": {
					    "passengers": {
					      "adultCount": 1
					    },
					    "slice": [
					      {
					        "origin": requestParam.Origin_Code,
					        "destination": requestParam.Dest_Code,
					        "date": requestParam.start_Date
					      },
					    ],
              "solutions": 20,
              "refundable": false
					  }
					}
              ),
		    headers: {'Content-Type': 'application/json'}
		    })
			.then(function(response) {
        console.log("RESPONSE......",response);
      const flight_data=response.data;
      console.log("RESPONSE.DATA......",flight_data);
      const availableFlights=[];

      flight_data.trips.tripOption.map((data)=>
      {
        var Total=data.saleTotal;
        var Duration='';
        var segmentAircraft='';
        var departure_time=' ';
        var arrival_time=' ';
        var departure_date=' ';
        var arrival_date=' ';
        var stops='';


        var flight_no = '';
        var carrier = '';
        var carrier_no ='';
        data.slice.map(eachslice=>{
        Duration=eachslice.duration;
        var hour=Math.floor(parseInt(Duration,10)/60);
        var minut=parseInt(Duration,10)%60;
        Duration=hour+"h "+minut+"m";
        var count=0;
         eachslice.segment.map(eachSegment=>{
           carrier = eachSegment.flight.carrier;
           carrier_no = eachSegment.flight.number;
           eachSegment.leg.map(eachleg=>{

              if(count===0)
              {
                var date=eachleg.departureTime.toString();
                var year = date.substring(0,4);
                var month = date.substring(5,7);
                var dt = date.substring(8,10);
                var monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];
                departure_date=year+", "+month+" "+dt;
                var time=date.substring(11,16);
                var H=parseInt(time.substring(0,3));
                var h=H%12||12;
                var ampm =(H<12||H===24)?" AM":" PM"
                departure_time=h+time.substring(2,5)+ampm;

              }
              if(count===(eachslice.segment.length-1))
              {
                var date=eachleg.arrivalTime.toString();
                var year = date.substring(0,4);
                var month = date.substring(5,7);
                var dt = date.substring(8,10);
                arrival_date=year+", "+month+" "+dt;
                var time=date.substring(11,16);
                var H=parseInt(time.substring(0,3));
                var h=H%12||12;
                var ampm =(H<12||H===24)?" AM":" PM"
                arrival_time=h+time.substring(2,5)+ampm;

              }
              var citynames=flight_data.trips.data.city.filter(e=>e.code===eachleg.origin)
              var o_c='';
              citynames.map(e=>{
                o_c=e.name
              })
              citynames=flight_data.trips.data.city.filter(e=>e.code===eachleg.destination)
              var d_c='';
              citynames.map(e=>{
                d_c=e.name
              })
              if(count!==(eachslice.segment.length-1))
              if(count===0)
               stops=stops+d_c;
              if(count!==0&&count!==(eachslice.segment.length-1))
               stops=stops+","+d_c;
              var a_name='';
              flight_data.trips.data.aircraft.filter(e=>e.code===eachleg.aircraft).map(e=>{a_name=e.name})
              segmentAircraft+=a_name+'\n'

            })
            count++;
          })
        })
         availableFlights.push({total: Total,duration: Duration,stops: stops,departure_date: departure_date,arrival_date: arrival_date,departure_time: departure_time,arrival_time: arrival_time,aircraft: segmentAircraft,carrier:carrier,carrier_no:carrier_no})
      })
			dispatch({type: 'FETCH_FLIGHTS_FULFILLED',payload: availableFlights});
      dispatch({type: 'TRIPS_DETAILs',payload: {from: requestParam.Origin_Code,to: requestParam.Dest_Code,date: requestParam.start_Date}})
			})
      .catch((err)=>{
        dispatch({type: "FETCH_FLIGHTS_REJECTED",payload: err})
      })
	}
};
