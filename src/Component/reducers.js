
export function airport_details(state={
  airport_details: [],
  airportsname: [],
  filter: [],
  fetching: false,
  fetched: false,
  error: null,
},action)
{
   switch (action.type){
     case "FETCH_DETAILS": {
       return {...state, airportsname: action.payload}
     }
     case "FETCH_DETAILS_REJECTED":{
       return {...state, fetching:false,error: action.payload}
     }
     case "FETCH_DETAILS_FILTER":{
       return {...state, filter: action.payload}
     }
     case "FETCH_DETAILS_FULFILLED":{
       return {
         ...state,
         fetching: false,
         fetched: true,
         airport_details: action.payload,
       }
     }
     default:
      return state;
   }

}

export  function available_flight(state={
  flights: [],
  trips: ' ',
  fetching: false,
  fetched: false,
  error: null
},action){
  switch (action.type){
    case "TRIPS_DETAILs": {
      return {...state,fetched: true, trips:action.payload}
    }
    case "FETCHED_FALSE":
    {
      return {...state, fetched: false}
    }
    case "FETCH_FLIGHTS_REJECTED":{
      return {...state, fetching:false,error: action.payload}
    }
    case "FETCH_FLIGHTS_FULFILLED":{
      return {
        ...state,
        fetching: false,
        flights: action.payload,
      }
    }
    default:
     return state;
  }
}

export function addContact(state={
  bookFlight: '',
  added: false
},action){

  switch (action.type) {
    case "ADD_CONTACT_FULFIELD":
      return {...state,added: true,bookFlight: action.payload}
    case "ADDED_FALSE":
      return {...state,added: false}
    default:
      return state;
  }

}
