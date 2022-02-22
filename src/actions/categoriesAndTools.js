// import { token } from '../index';


export const fetchCategoriesAndTools = () => {
    let token = localStorage.getItem("jwt");
    return (dispatch) => {
        dispatch({type: "FETCHING_CATEGORIES"}); //sending an action to the reducer to indicate request made
        dispatch({type: "CATEGORIES_AND_TOOLS_GET_REQUEST"});

        fetch("http://localhost:3001/api/v1/categories", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then(jsonData => {
            const jsonCategoriesArray = jsonData.categories;
            const categories = JSON.parse(jsonCategoriesArray);
            dispatch({
                type: "ADD_CATEGORIES", categories
            });

            const jsonToolsArray = jsonData.tools;
            const tools = JSON.parse(jsonToolsArray);
            dispatch({
                type: "ADD_TOOLS", tools
            });
        });
    }
}