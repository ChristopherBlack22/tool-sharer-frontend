export const fetchTools = () => {
    return (dispatch) => {
        dispatch({type: "USER_POST_REQUEST"}); //sending an action to the reducer to indicate request made

        fetch("http://localhost:3001/api/v1/signup", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(jsonData => {
                if (jsonData.error) {
                    alert(jsonData.error);
                    dispatch({type: "COMPLETED_WITH_ERROR"});
                } else {
                    // const user = jsonData.user; SOMETHING HERE TO DO WITH TOOLS
                    dispatch({
                        type: "ADD_TOOLS", //and TOOLS here
                    });
                }
        });
    }
}