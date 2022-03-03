const UserLoggedIn = (currentUserId) => {
    if(localStorage.jwt && currentUserId) {
        return true
    } else {
        //ensure jwt hasnt been left from incorrect logout or maliciously added
        localStorage.removeItem("jwt");
        return false
    }
}

export default UserLoggedIn;