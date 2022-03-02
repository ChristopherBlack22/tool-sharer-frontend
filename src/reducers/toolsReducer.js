export default function toolsReducer (state = {toolsArray: [], fetchingTools: false}, action) {
    let newToolsArray;
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
            newToolsArray = state.toolsArray.map(tool => {
                if (tool.id === action.tool.id) { 
                    return action.tool
                } else {
                    return tool
                }
            });
            return {
                toolsArray: newToolsArray, fetchingTools: false
            }; 
            
        case "POSTING_TOOL_DATA":
            return {
                ...state, fetchingTools: true
            };
        case "ADD_NEW_TOOL":
            newToolsArray = [...state.toolsArray, action.tool]
            return {
                toolsArray: newToolsArray, fetchingTools: false
            };
        case "TOOL_ERROR":
            return {
                ...state, fetchingTools: false
        };

        // case "DELETE_TOOL":
        //     //request sent to server, response will be the new array with a tool removed, toolArray just requires overwriting
        //     return {
        //         toolsArray: action.tools, fetchingTools: false
        //     };

        default:
            return state;

    }
}