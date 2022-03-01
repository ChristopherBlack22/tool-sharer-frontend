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
            debugger
            return {
                
                // b = [...state.toolsArray]
                // b.map(t => {if(t.id === action.tool.id) {return {...t, id: action.tool.id}} else {return t}})
                // ISSUE HERE THAT JS DOESNT READ NULL, SO NEED TO CHECK BORROWER EXISTS BEFORE TRYING TO SET ITS ID




            };        

        default:
            return state;

    }
}