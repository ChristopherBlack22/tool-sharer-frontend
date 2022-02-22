export default function toolsReducer (state = {toolsArray: [], fetchingTools: false}, action) {
    switch (action.type) {
        case "FETCHING_TOOLS":
            return {
                ...state, fetchingTools: true
            };
        case "ADD_TOOLS":
            return {
                toolsArray: action.tools, fetchingTools: false
            };

        // Borrow and return tool

        default:
            return state;

    }
}