export const ServerURL = () => {
    return "http://localhost:3001/api/v1"
}

export const LocalStorageJWT = () => {
    return localStorage.jwt
}

export const UserLoggedIn = (currentUserId) => {
    if(LocalStorageJWT() && currentUserId) {
        return true
    } else {
        //ensure jwt hasnt been left from incorrect logout or maliciously added
        localStorage.removeItem("jwt");
        return false
    }
}



