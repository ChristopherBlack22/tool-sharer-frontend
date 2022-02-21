export default function categoriesReducer (state = [], action) {
    console.log(`categoriesReducer ${action}`);
    switch (action.type) {
        case "ADD_CATEGORIES":
            return {
                tools: action.categories
            };

        default:
            return state;

    }
}