export default function toolsReducer (state = [], action) {
    console.log(`toolsReducer ${action}`);
    switch (action.type) {
        case "ADD_TOOLS":
            return {
                tools: action.tools
            };

        // Borrow and return tool

        default:
            return state;

    }
}