import { CardType, apiKey, apiURLCards } from "../../Constants"
import { useContext } from "react"
import { UserContext } from "../../Components/Context/UserIdContext"
import { CardsContext } from "../../Components/Context/CardContext"




export const getCards = async (userKey:string) => {
    const result = await (await fetch(apiURLCards,{
        method: "GET",
        headers:{
            "x-api-key": apiKey,
            "content-type": "application/json",
            "Authorization": userKey
        }
        
    })).json()
    return result
}

