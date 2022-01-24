import { makeApiRequest, validateForm } from '../../global/functions/globalFunctions';

const setInput = (type, value) => dispatch => {
    dispatch({
        type: "SET_INPUT_LOGIN",
        payload: {
            type: type,
            value: value
        }
    })
}

const makeLogin = (data) => dispatch => {
    let isNullExist = validateForm(data);
    if (!isNullExist.result) {
        dispatch({
            type: "GET_LOGIN"
        })
        makeApiRequest("Accounts/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                username: data[0].value,
                password: data[1].value
            })
        })
            .then((response) => response.json())
            .then((login) => {
                console.log(login)
                dispatch({
                    type: "FETCH_LOGIN",
                    payload: login
                })
            })
            .catch((error) => {
                dispatch({
                    type: "ERROR_LOGIN",
                    payload: error
                })
            })
    } else {
        isNullExist.objects.map((val, index) => {
            return dispatch({
                type: "SET_ERROR_INPUT_LOGIN",
                payload: "error_" + val.key
            })
        })
    }
}


export { makeLogin, setInput }