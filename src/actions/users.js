// const token = localStorage.getItem("jwt");
// Authorization: `Bearer ${token}`
// use for GET requests once logged in

export const signupNewUser= (newUserData) => {
    return (dispatch) => {
        dispatch({type: "USER_POST_REQUEST"}); //sending an action to the reducer to indicate request made

        fetch("http://localhost:3001/api/v1/signup", {
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
                    dispatch({type: "COMPLETED_WITH_ERROR"});
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
        dispatch({type: "USER_POST_REQUEST"}); //sending an action to the reducer to indicate request made

        fetch("http://localhost:3001/api/v1/login", {
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
                dispatch({type: "COMPLETED_WITH_ERROR"});
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
