import { Background, Body, Form, Title } from "./style";
import { Input } from "../../Components/Inputs";
import { useState } from "react";
import { login } from "../../Services/Users";
import { useNavigate } from "react-router-dom";

export default function LoginScreen(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [error, serError] = useState("")
  const navigate = useNavigate();
  const handleClick = () => {

    setErrors({
      email: "",
      password: "",
    });

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

    if (email === "" || password === "") {
      return;
    }
  
  doLogin();

  };

const doLogin = async () =>{
  try{
  const result = await login (email, password)
  sessionStorage.setItem ('userKey', result.token)
  sessionStorage.setItem ('userName', result.name)
  
  navigate("/home")

  } catch(e){
    if (e instanceof Error){
      serError(e.message)
      console.log(e.message)
    }
  }
}
  return (
    <>
      <Background>
        <Body>
          <Title>Arnia Trello</Title>
          <Form>
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
            <button onClick={handleClick}>Entrar</button>
            <p>{error}</p>
          </Form>
          <a href="/register">Cadastre-se</a>
          
        </Body>
      </Background>
    </>
  );
}
