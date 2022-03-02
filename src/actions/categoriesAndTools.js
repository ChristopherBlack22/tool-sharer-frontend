// import { token } from '../index';


export const fetchCategoriesAndTools = () => {
    let token = localStorage.getItem("jwt");
    return (dispatch) => {
        dispatch({type: "FETCHING_CATEGORIES"}); //sending an action to the reducer to indicate request made
        dispatch({type: "FETCHING_TOOLS"});

        fetch("http://localhost:3001/api/v1/categories", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then(jsonData => {
            const jsonCategoriesArray = jsonData.categories;
            const categories = JSON.parse(jsonCategoriesArray);
            dispatch({
                type: "ADD_CATEGORIES", categories
            });

            const jsonToolsArray = jsonData.tools;
            const tools = JSON.parse(jsonToolsArray);
            dispatch({
                type: "ADD_TOOLS", tools
            });
        });
    }
}

export const updateTool = (toolData) => {
    let token = localStorage.getItem("jwt");
    return (dispatch) => {
        dispatch({type: "PATCHING_TOOL_DATA"});

        fetch(`http://localhost:3001/api/v1/tools/${toolData.tool.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(toolData)
        })
        .then(response => response.json())
        .then(jsonData => {
            const tool = JSON.parse(jsonData.tool);
            dispatch({
                type: "UPDATE_TOOL", tool
            });
        });
    }    
}

export const createNewTool = (newToolData) => {
    let token = localStorage.getItem("jwt");
    return (dispatch) => {
        dispatch({type: "POSTING_TOOL_DATA"});
        
        fetch("http://localhost:3001/api/v1/tools", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newToolData)
        })
        .then(response => response.json())
        .then(jsonData => {
            if (jsonData.error) {
                alert(jsonData.error);
                dispatch({type: "TOOL_ERROR"});
            } else {
                const tool = JSON.parse(jsonData.tool);
                alert(`Your ${tool.name} has been shared and is now available for others to borrow`);
                dispatch({
                    type: "ADD_NEW_TOOL", tool
                });
            }
        });
    }
}

// export const deleteTool = (toolId) -> {
//     let token = localStorage.getItem("jwt");
//     return (dispatch) => {
//         dispatch({type: "POSTING_TOOL_DATA"});


//         dispatch({
//             type: "DELETE_TOOL", tools
//         });

// }