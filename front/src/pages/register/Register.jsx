import './register.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import FormField from "../../components/forms/FormField";

const Register = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // register backend
    }

    return (
        <div className="register-page">
            <Navbar/>
            <div className="register">
                <h2>Registrar</h2>
                <form className="register-form">
                    <FormField 
                        type="text" 
                        id="nome" 
                        placeholder="Digite seu nome" 
                        label="Nome:" 
                        required={true} 
                    />

                    <FormField 
                        type="email" 
                        id="email" 
                        placeholder="Digite seu email" 
                        label="Email:" 
                        required={true} 
                    />

                    <FormField 
                        type="password" 
                        id="senha" 
                        placeholder="Digite sua senha" 
                        label="Senha:" 
                        required={true} 
                    />

                    <button onClick={handleClick}>Registrar</button>
                </form>
                <p className="linkLogin">
                    Já tem conta?{" "}
                    <span onClick={() =>navigate("/login")}>Login</span>
                </p>
            </div>
        
        </div>
    );
};

export default Register;
