export default function currentUserReducer (state = {id: null, username: null, email: null, postingUserData: false}, action) {
    switch (action.type) {
        case "POSTING_USER_DATA": 
            return {
                ...state, postingUserData: true
            };
        case "USER_ERROR":
            return {
                ...state, postingUserData: false
            };
        case "LOGIN_USER":
            let user = action.user;
            return {
                id: user.id, username: user.username, email: user.email, postingUserData: false
            };

        // case "LOGOUT_USER":
        //     return {id: null, username: null, email: null};
        
        default:
            return state;
    }
}