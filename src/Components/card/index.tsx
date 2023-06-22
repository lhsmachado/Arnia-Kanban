import { BTNNo, BTNYes, CardBox, CardFooter, CardHeader, ModalStyled, TitleModal } from "./style";
import { CardType, ColumnType, apiKey, apiURLCards, columns } from "../../Constants";
import { useContext, useState } from "react"
import { UserContext } from "../Context/UserIdContext";
import { CardsContext } from "../Context/CardContext";


type CardsProps ={
    title: string,
    content: string,
    _id:string,
    column: ColumnType
}


export default function Card ({title, content, _id, column}:CardsProps, ){
    const values = useContext(UserContext)
    const { token } = values
    const [cards, setCards] = useContext(CardsContext)

    const [modalIsOpen, setIsOpen] = useState(false);

    const deleteCards = async (id:string) => {
        const result = await (await fetch(apiURLCards + '/' + id,{
            method: "DELETE",
            headers:{
                "x-api-key": apiKey,
                "content-type": "application/json",
                "Authorization": token
            }
            
        })).json()

        setIsOpen(false)
        setCards(result)
    }

    
        
    



    const UpdateCards = async (title:string, content:string, id:string, column:ColumnType) =>{

        const card:CardsProps = {title, content, column, _id}
        const result: CardType[] = await (await fetch(apiURLCards +'/' + id,{
            method: "PUT",
            headers: {
                "x-api-key": apiKey,
                "content-type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(card)
            
        } )).json()
        
        return (setCards(result))  
    }

    const NextCard = (column:ColumnType): ColumnType =>
        columns[columns.findIndex(columns => columns === column) + 1]
        
    const PreviousCard = (column:ColumnType): ColumnType =>
    columns[columns.findIndex(columns => columns === column) - 1]


    const [editable, setEditable] = useState(false)
    const [titleEdit, setTitleEdit] = useState(title)
    const [contentEdit, setContentEdit] = useState(content)
    if (!editable){
    return(
        <>
        <ModalStyled
            isOpen={modalIsOpen}
            onRequestClose={()=>setIsOpen(false)}
            contentLabel='Delete Card'
            overlayClassName="modal-overlay"
            className='modal-content'
        >
            <TitleModal>DESEJA REALMENTE EXCLUIR ESTE CARD?</TitleModal>
            <div>
            <BTNNo onClick={()=>setIsOpen(false)}>NÃO</BTNNo>
            <BTNYes onClick={()=>{deleteCards(_id);setIsOpen(false)}}>SIM</BTNYes>
            </div>
        </ModalStyled>

            <CardBox>
                <CardHeader>
                    <h3>{title}</h3>
                    <button onClick={()=> setEditable(true)}><img src="src\Icons\edit.svg" /></button>
                </CardHeader>
                <p>{content}</p>
                <CardFooter>
                {column != "TODO"  ?(
                    <button onClick={()=>UpdateCards(title, content, _id, PreviousCard(column))}><img src="src\Icons\left-arrow.svg" /></button>
                ): <button style={{color:"transparent"}}>a</button>}
                <button onClick={() =>setIsOpen(true)} ><img src="src\Icons\delete.svg" /></button>
                {column != "DONE"  ?(
                    <button onClick={()=>UpdateCards(title, content, _id, NextCard(column))}><img src="src\Icons\right-arrow.svg" /></button>
                ): <button style={{color:"transparent"}}>a</button>}
                </CardFooter>
            </CardBox>
        </>
    )}

    return(
        <>  
            <CardBox>
            <input type="text"  value={titleEdit} onChange={(e)=>setTitleEdit(e.target.value)}/>
            <textarea value={contentEdit} onChange={(e)=>setContentEdit(e.target.value)}></textarea>
            <CardFooter>
            <button onClick={()=>setEditable(false)}><img src="src\Icons\cancel.svg" /></button>
            <button onClick={()=> {setEditable(false); UpdateCards(titleEdit, contentEdit, _id, column)}}><img src="src\Icons\save.svg" /></button>
            </CardFooter>
            </CardBox>
        </>

    )

}