import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import { Body, Columns } from "./style";
import { useContext, useEffect, useState } from "react";
import { getCards } from "../../Services/Cards";
import CreateCard from "../../Components/createCard";
import { CardType, ColumnType, columns } from "../../Constants";
import { Column } from "../../Components/Column";
import { UserContext } from "../../Components/Context/UserIdContext";
import { CardsContext } from "../../Components/Context/CardContext";

const userKey = sessionStorage.getItem('userKey')
const userName = sessionStorage.getItem('userName')


export default function Home () {
    
    const navigate = useNavigate();
    const [cards, setCards] = useContext(CardsContext)
    
    useEffect(()=>{
        if (userKey === null){
            navigate("/")
        }}, [])
        
    useEffect(() =>{
            
        infoApi()}
            
        , [])
        
        const infoApi = async ()=>{
            if(userKey != null ){
                const resultsApi = await getCards(userKey)
                
                setCards( resultsApi)}
                console.log(cards)
            }



    if(userKey != null)

    return (
        <>
            <UserContext.Provider
                value={{
                    token: userKey,
                    name: userName
                }}>

            <Header 
                name={userName}
            />
            <Body>
                <Columns>
                <h2>NOVO</h2>
                <CreateCard ></CreateCard>
                </Columns>

                {columns.map((columns:ColumnType) =>(
                    <Column 
                    cards={cards.filter(card => card.column === columns)} 
                    column={columns}
                    />

                ))}
            </Body>
            </UserContext.Provider >
        </>
    )}
