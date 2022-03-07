import { ServerURL, LocalStorageJWT } from '../helpers/helperFunctions';
const serverURL = ServerURL();

export const fetchCategories = () => {
    return (dispatch) => {
        dispatch({type: "FETCHING_CATEGORIES"});

        fetch(`${serverURL}/categories`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${LocalStorageJWT()}`,
            }
        })
        .then(response => response.json())
        .then(jsonData => {
            const jsonCategoriesArray = jsonData.categories;
            const categories = JSON.parse(jsonCategoriesArray);
            dispatch({
                type: "ADD_CATEGORIES", categories
            });
        });
    }
}