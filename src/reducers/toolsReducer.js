export default function toolsReducer (state = {toolsArray: [], fetchingTools: false}, action) {
    console.log(action);
    switch (action.type) {
        case "FETCHING_TOOLS":
            debugger
            return {
                ...state, fetchingCategories: true
            };
        case "ADD_TOOLS":
            return {
                toolsArray: action.tools, fetchingCategories: false
            };

        // Borrow and return tool

        default:
            return state;

    }
}