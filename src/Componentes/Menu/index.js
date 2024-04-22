import React from "react";
 import "./css.css";
export default function Header() {
    return(
        <header className="Header">
         <h2>Diego dias</h2>
            <nav>
                <ul>
                    <li><a className="LINKS" href="#EXP">Experiência</a></li>
                    <li><a className="LINKS" href="#formaçao">formaçao</a></li>
                    <li><a className="LINKS" href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
    
}