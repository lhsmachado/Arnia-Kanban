import { createContext } from "react"

type User = {
    token:string,
    name:string | null
}

export const UserContext = createContext<User>({
    token: "",
    name: ""
})