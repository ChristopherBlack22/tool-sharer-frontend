import { ServerURL, LocalStorageJWT } from '../helpers/helperFunctions';
const serverURL = ServerURL();
const token = LocalStorageJWT();

export const fetchCategoriesAndTools = () => {
    return (dispatch) => {
        dispatch({type: "FETCHING_CATEGORIES"}); //Sending actions to the reducer to indicate request made
        dispatch({type: "FETCHING_TOOLS"}); //Both Categories and Tools are being fetched in the same request but notifying separate reducers

        fetch(`${serverURL}/categories`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then(jsonData => {
            //dealing with the returned Categories
            const jsonCategoriesArray = jsonData.categories;
            const categories = JSON.parse(jsonCategoriesArray);
            dispatch({
                type: "ADD_CATEGORIES", categories
            });
            //dealing with the returned Tools
            const jsonToolsArray = jsonData.tools;
            const tools = JSON.parse(jsonToolsArray);
            dispatch({
                type: "ADD_TOOLS", tools
            });
        });
    }
}

export const updateTool = (toolData) => {
    return (dispatch) => {
        dispatch({type: "PATCHING_TOOL_DATA"});

        fetch(`${serverURL}/tools/${toolData.tool.id}`, {
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
    return (dispatch) => {
        dispatch({type: "POSTING_TOOL_DATA"});
        
        fetch(`${serverURL}/tools`, {
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
                alert(`Your ${tool.name} has been shared and is now available for others to borrow.`);
                dispatch({
                    type: "ADD_NEW_TOOL", tool
                });
            }
        });
    }
}

export const deleteTool = (toolId) => {
    return (dispatch) => {
        dispatch({type: "DELETING_TOOL"});

        fetch(`${serverURL}/tools/${toolId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then(jsonData => {
            alert("Tool is no longer being shared.");
            const jsonToolsArray = jsonData.tools;
            const tools = JSON.parse(jsonToolsArray);
            dispatch({
                type: "DELETE_TOOL", tools
            });
        });
   }
}