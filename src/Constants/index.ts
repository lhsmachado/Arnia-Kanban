export const apiURLLogin = "https://arnia-kanban.vercel.app/api/user/login"
export const apiURLRegister = "https://arnia-kanban.vercel.app/api/user"
export const apiURLCards = "https://arnia-kanban.vercel.app/api/card"
export const apiKey = "52a8b954-e25d-4cc5-86e5-c32e92f994bb"
export const columns: ColumnType[] = ["TODO", "DOING", "DONE"]

export type CardType ={
    _id?:string,
    title:string,
    content:string,
    column?:string,
    userId?:string,
    __v?:number
}

export type Cards = Array<CardType>

export type ColumnType =  'TODO' | 'DOING' | 'DONE'