const initialState = {
    cartCount: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_CART_COUNT":
            return {
                ...state,
                cartCount: action.payload
            }
        default:
            return state
    }

}
