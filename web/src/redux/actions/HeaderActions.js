const getCartCount = () => dispatch => {
    dispatch({
        type: "GET_CART_COUNT",
        payload : 2
    })
}


export {
  getCartCount
};