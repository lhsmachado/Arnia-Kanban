import { Background, Title, UserName } from "./style"

type Props = {
    name:string | null
}

export default function Header ( props:Props) {
    return(
        <>
            <Background>
                <Title>Arnia Trello</Title>
                <UserName>
                    <h2>Olá {props.name}</h2>
                    <a href="/">Sair</a>
                </UserName>
            </Background>
        </>

    )


}