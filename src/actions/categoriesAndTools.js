import { token } from '../index';

export const fetchCategoriesAndTools = () => {
    return (dispatch) => {
        dispatch({type: "CATEGORIES_AND_TOOLS_GET_REQUEST"}); //sending an action to the reducer to indicate request made

        fetch("http://localhost:3001/api/v1/categories", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then(jsonData => {
            //is rendering of errors required?
                if (jsonData.error) {
                    alert(jsonData.error);
                    dispatch({type: "COMPLETED_WITH_ERROR"});
                } else {
                    const categories = jsonData.categories;
                    dispatch({
                        type: "ADD_CATEGORIES", categories
                    });

                    const tools = jsonData.tools;
                    dispatch({
                        type: "ADD_TOOLS", tools
                    });
                }
        });
    }
}