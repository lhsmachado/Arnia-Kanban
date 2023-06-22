import { Background, Body, Form, Title } from "./style";
import { Input } from "../../Components/Inputs";
import { useState } from "react";
import { register } from "../../Services/Users";
import { useNavigate } from "react-router-dom";


export default function SignupScreen(): JSX.Element {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        name: "",
        passwordRepeat:"",
        passwordConfirm:""
    });
    const [error, serError] = useState("")
    const navigate = useNavigate();

    const handleClick = () =>{
        setErrors({
            email: "",
            password: "",
            name: "",
            passwordRepeat:"",
            passwordConfirm:""
        });

        if (name === "") {
            setErrors((prev) => ({
            ...prev,
            name: "O campo nome é obrigatório",
            }));
        }
        if (email === "") {
            setErrors((prev) => ({
            ...prev,
            email: "O campo email é obrigatório",
            }));
        }
        
        if (password === "") {
            setErrors((prev) => ({
            ...prev,
            password: "O campo senha é obrigatório",
            }));
        }

        if (passwordRepeat === "") {
            setErrors((prev) => ({
            ...prev,
            passwordRepeat: "O campo senha é obrigatório",
            }));
        }

        if (password != passwordRepeat) {
            setErrors((prev) => ({
            ...prev,
            passwordRepeat: "As senhas não coincidem",
            }));
            return;
        }

        if (email === "" || password === "" || passwordRepeat === "" || name === "") {
            return;
        }
        
        const doRegister = async () =>{
            
            const result = await register (email, password, name)
            
            if (result === true){
            navigate('/')
            }
        
            if (result === "email"){
                serError("Email já cadastrado")
                return
            }
            
        }

        doRegister();
    }

    return (
        <>
        <Background>
            <Body>
                <Title>Arnia Trello</Title>
                <Form>
                    <Input
                        type="text"
                        title="Nome Completo"
                        placeholder="Nome Completo"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p>{errors.name}</p>
                    <Input 
                        type="email"
                        title="Email"
                        placeholder="Email" 
                        required 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>{errors.email}</p>
                    <Input 
                        type="password" 
                        title="Senha" 
                        placeholder="Senha" 
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>{errors.password}</p>
                    <Input
                        type="password"
                        title="Repita sua senha"
                        placeholder="Repita sua senha"
                        required
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                    />
                    <p>{errors.passwordRepeat}</p>
                    <p>{error}</p>
                    <button onClick={handleClick}>Cadastrar</button>
                </Form>
            </Body>
        </Background>
        </>
    );
}
