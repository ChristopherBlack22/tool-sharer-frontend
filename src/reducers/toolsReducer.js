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

        case "PATCHING_TOOL_DATA":
            return {
                ...state, fetchingTools: true
            };
        case "UPDATE_TOOL":
            const newToolsArray = state.toolsArray.map(tool => {
                if (tool.id === action.tool.id) { 
                    return action.tool
                } else {
                    return tool
                }
            });

            return {
                toolsArray: newToolsArray, fetchingTools: false
            };        

        default:
            return state;

    }
}