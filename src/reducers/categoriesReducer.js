export default function categoriesReducer (state = [], action) {
    console.log(action);
    switch (action.type) {
        case "ADD_CATEGORIES":
            return {
                categoriesArray: action.categories 
            };

        default:
            return state;

    }
}