export const fetchUser = async () => {
    try {
        const url = "http://localhost:3000/user"
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("userToken"),
            }
        })
        const result = await response.json()
        if (result.success) {
            setUser(result.user)
        } else {
            console.error(result.message)
        }
    } catch (error) {
        console.error(error)
    }
}

export const fetchUserProfile = async () => {
    try {
        const url = "http://localhost:3000/user/picture"
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("userToken"),
            }
        })
        const result = await response.json()
        if (result.success) {
            setProfile(result.user || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541")
        } else {
            console.error(result.message)
        }
    } catch (error) {
        console.error(error)
    }
}
