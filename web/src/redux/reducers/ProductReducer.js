const initialState = {
  isFetching: false,
  data: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        isFetching: !state.isFetching,
      }

    case "FETCH_PRODUCT":
      return {
        ...state,
        isFetching: !state.isFetching,
      }

    default:
      return state
  }

}
