export default function toolsReducer (state = [], action) {
    console.log(action);
    switch (action.type) {
        case "ADD_TOOLS":
            return {
                toolsArray: action.tools
            };

        // Borrow and return tool

        default:
            return state;

    }
}