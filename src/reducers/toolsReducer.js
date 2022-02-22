export default function toolsReducer (state = {toolsArray: [], fetchingTools: false}, action) {
    console.log(action);
    switch (action.type) {
        case "FETCHING_TOOLS":
            debugger
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