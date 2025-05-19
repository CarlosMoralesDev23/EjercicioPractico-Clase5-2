import React from "react";
import Carrito from "../assets/carrito2.png"
import "../Styles/Nav.css"

const Nav = () => {
    return (
        <div className="navContainer">
            <ul>
                <li>Inicio</li>
                <li>Contacto</li>
                <li>Registro</li>
                <li><img src={Carrito} alt="" /></li>
            </ul>
        </div>
    );
};

export default Nav;
