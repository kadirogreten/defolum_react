import { ApiEndPointURL } from '../constants/constants';

function makeApiRequest(url, options) {
   return fetch(ApiEndPointURL + url, options)
};

const validateForm = (data) => {

    var isNullExist = false;
    var nullFields = [];

    data.map((item, key) => {
        if (item.required) {
            if (item.value.length === 0) {
                isNullExist = true;
                nullFields.push(item);
            } else {
                if (item.key === "password" && item.value.length < 6) {
                    isNullExist = true;
                    nullFields.push(item);
                }
                if (item.key === "email") {
                    if (!helpers.emailIsValid(item.value)) {
                        isNullExist = true;
                        nullFields.push(item);
                    }
                }
            }
        }
    })

    return {
        result: isNullExist,
        objects: nullFields
    };
}

const helpers = {
    emailIsValid(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
};

export { makeApiRequest, validateForm, helpers };