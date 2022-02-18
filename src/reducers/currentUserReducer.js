export default function currentUserReducer (state = {id: null, username: null, email: null}, action) {
    //console.log(action);
    switch (action.type) {
        //Moved to statusReducer
        // case "USER_POST_REQUEST": 
        //     return {
        //         ...state, requesting: true
        //     };
        case "SIGNUP_&_LOGIN_USER":
            console.log(action)
            let user = action.user;
            return {
                id: user.id, username: user.username, email: user.email
            };

        // case "LOGIN_USER":
        //     return ;
        // case "LOGOUT_USER":
        //     return ;
        
        default:
            return state;
    }
}