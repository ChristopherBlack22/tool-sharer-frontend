export default function currentUserReducer (state = {requestingFromAPI: false}, action) {
    //console.log(action);
    switch (action.type) {
        case "USER_POST_REQUEST":
            return {
                requestingFromAPI: true
            };
        case "SIGNUP_&_LOGIN_USER":
            return {
                requestingFromAPI: false
            };
        default:
            return state;
    }
}