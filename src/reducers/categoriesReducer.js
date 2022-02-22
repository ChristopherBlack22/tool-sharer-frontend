export default function categoriesReducer (state = {categoriesArray: [], fetchingCategories: false}, action) {
    console.log(action);
    switch (action.type) {
        case "FETCHING_CATEGORIES":
            debugger
            return {
                ...state, fetchingCategories: true
            };
        case "ADD_CATEGORIES":
            return {
                categoriesArray: action.categories, fetchingCategories: false 
            };

        default:
            return state;

    }
}