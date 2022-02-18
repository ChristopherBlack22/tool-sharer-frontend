// const token = localStorage.getItem("jwt_token");

export const signupNewUser= (newUserData) => {
    return (dispatch) => {
        dispatch({type: "USER_POST_REQUEST"}); //sending an action to the reducer to indicate request made

        fetch("http://localhost:3001/api/v1/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                // Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newUserData)
        })
        .then(response => response.json())
        .then(jsonData => {
            localStorage.setItem("jwt_token", jsonData.jwt);
            const user = jsonData.user;
            dispatch({
                type: "SIGNUP_&_LOGIN_USER", user
            });
        });
    }
}