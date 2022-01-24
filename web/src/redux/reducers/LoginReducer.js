const initialState = {
    isFetching: false,
    email: '',
    password: '',
    error_email: false,
    error_password: false,
    error: false,
    token: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_LOGIN":
            return {
                ...state,
                error: false,
                isFetching: !state.isFetching,
            }
        case "FETCH_LOGIN":
            return {
                ...state,
                isFetching: !state.isFetching,
            }
        case "ERROR_LOGIN":
            return {
                ...state,
                error: true,
                isFetching: !state.isFetching,
            }
        case "SET_INPUT_LOGIN":
            return {
                ...state,
                ['error_' + action.payload.type]: false,
                [action.payload.type]: action.payload.value
            }
        case "SET_ERROR_INPUT_LOGIN":
            return {
                ...state,
                [action.payload]: true,
                isFetching: false
            }

        default:
            return state
    }

}
