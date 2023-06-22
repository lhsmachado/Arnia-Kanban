import { CardType, ColumnType } from "../../Constants";
import { Columns } from "./style";
import Card from "../card";
type Props ={
    cards: CardType[],
    column: ColumnType
}

export const Column = ({ cards, column}: Props) =>
    (

    <Columns>
        <h2>{column}</h2>
        {cards.map(card =>(
            <Card 
            _id={card._id} 
            title={card.title} 
            content={card.content}
            column={column}             
            />

        ))
        }
    </Columns>
)