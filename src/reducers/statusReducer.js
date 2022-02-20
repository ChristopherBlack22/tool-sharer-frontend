export default function currentUserReducer (state = {requestingFromAPI: false}, action) {
    //console.log(action);
    switch (action.type) {
        case "USER_POST_REQUEST":
            return {
                requestingFromAPI: true
            };
        case "LOGIN_USER":
            return {
                requestingFromAPI: false
            };

        case "TOOLS_GET_REQUEST":
            return {
                requestingFromAPI: true
            };
        case "ADD_TOOLS":
            return {
                requestingFromAPI: false
        };





        case "COMPLETED_WITH_ERROR":
            return {
                requestingFromAPI: false
            };
        default:
            return state;
    }
}