import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "../../Pages/Home";
import LoginScreen from "../../Pages/Login";
import SignupScreen from "../../Pages/SignUp";

export default function RoutesApp (){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/register" element={<SignupScreen />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
    )

}