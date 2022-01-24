const initialState = {
  isFetching: false,
  data : []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_HOME":
      return {
        ...state,
        isFetching: true,
      }
    
    case "FETCH_HOME":
      return {
          ...state,
          isFetching: false,
          data : action.payload
        }
   
    default:
      return state
  }

}
