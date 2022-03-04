import { ServerURL } from '../helpers/helperFunctions';
const serverURL = ServerURL();

export const signupNewUser= (newUserData) => {
    return (dispatch) => {
        dispatch({type: "POSTING_USER_DATA"}); //Sending an action to the reducer to indicate request made

        fetch(`${serverURL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(newUserData)
        })
        .then(response => response.json())
        .then(jsonData => {
                if (jsonData.error) {
                    alert(jsonData.error);
                    dispatch({type: "USER_ERROR"});
                } else {
                    localStorage.setItem("jwt", jsonData.jwt);
                    const user = jsonData.user;
                    dispatch({
                        type: "LOGIN_USER", user
                    });
                }
        });
    }
}

export const loginUser= (userData) => {
    return (dispatch) => {
        dispatch({type: "POSTING_USER_DATA"}); //Sending an action to the reducer to indicate request made

        fetch(`${serverURL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(jsonData => {
            if (jsonData.error) {
                alert(jsonData.error);
                dispatch({type: "USER_ERROR"});
            } else {
                localStorage.setItem("jwt", jsonData.jwt);
                const user = jsonData.user;
                dispatch({
                    type: "LOGIN_USER", user
                });
            }
        });
    }
}
