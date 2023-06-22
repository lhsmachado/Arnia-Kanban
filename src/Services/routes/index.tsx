import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "../../Screens/Home";
import LoginScreen from "../../Screens/Login";
import SignupScreen from "../../Screens/SignUp";

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