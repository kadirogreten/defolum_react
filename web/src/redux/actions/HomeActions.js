
const getHome = () => dispatch => {
    dispatch({
        type: "GET_HOME"
    })
     fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: "FETCH_HOME",
        payload : json

     })
    })
}


export {
  getHome
};