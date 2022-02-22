export default function categoriesReducer (state = {categoriesArray: [], fetchingCategories: false}, action) {
    switch (action.type) {
        case "FETCHING_CATEGORIES":
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