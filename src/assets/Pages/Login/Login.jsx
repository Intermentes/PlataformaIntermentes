import React from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import style from "./Login.module.css";
import MenuLogin from "./MenuLogin/Menu";
import Footer from "../../Componentes/Footer/Footer";

export default function Login() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); // Volta para a página anterior
    };

    return (
        <div>
            <main className={style.mainLogin}>
                <div className={style.btnVoltar} onClick={handleBackClick}>Voltar</div>
                <h1>Faça seu Login</h1>
                <div className={style.containerLogin}>
                    <MenuLogin />
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
