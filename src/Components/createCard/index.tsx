import { CardType, apiKey, apiURLCards } from "../../Constants";
import { CardsContext } from "../Context/CardContext";
import { UserContext } from "../Context/UserIdContext";
import { CardBox } from "./style";
import { useContext, useState } from "react";

export default function CreateCard (){

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [cards, setCards] = useContext(CardsContext)
    const values = useContext(UserContext)
    const { token } = values

    const CreateCardsApi = async (title:string, content:string) =>{

        
    
        const card = {title, content}

        const result: CardType[] = await (await fetch(apiURLCards, {
            method: "POST",
            headers: {
                "x-api-key": apiKey,
                "content-type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(card),
            
        } )).json()
        
        return (setCards(result))
    }

    return(
        <>
            <CardBox>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Título"/>
                <textarea name=""  onChange={(e)=>setContent(e.target.value)}  cols={30} rows={10} placeholder="Conteúdo"></textarea>
                <button onClick={() => CreateCardsApi(title, content )}><img src="src\Icons\plus.svg"  /></button>
            </CardBox>
        </>
    )

}