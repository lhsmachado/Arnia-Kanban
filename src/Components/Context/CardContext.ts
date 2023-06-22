import { createContext, Dispatch, SetStateAction } from "react"
import { Cards } from "../../Constants"


type CardsContextType = [ Cards, Dispatch<SetStateAction<Cards>>]

export const CardsContext = createContext<CardsContextType>([ [], () => ({})],)