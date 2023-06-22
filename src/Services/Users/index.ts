import { apiKey, apiURLLogin, apiURLRegister } from "../../Constants"

export const login = async (email:string, password:string) => {
    const result = await fetch(apiURLLogin,{
        method: "POST",
        headers:{
            "x-api-key": apiKey,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
    
    if (result.status === 200) {
        const token = await result.json()
        return token
    }
    
    const error = await result.json()
    return error.message
    
}

export const register = async (email:string, password:string, name:string) => {
    const result = await fetch(apiURLRegister,{
        method: "POST",
        headers:{
            "x-api-key": apiKey,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
            name
        }),
    })

    if (result.status === 201) {
        return true
    }

    if (result.status === 500){
        return ("email")
    }
}
