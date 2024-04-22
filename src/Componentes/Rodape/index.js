import React from "react";
import whatsap from "../../Assets/whatsapp.png";
import linkdin from "../../Assets/linkedin.png";
import "./style.css";
export default function Footer() {
    return(
        <footer>
            <section id="contato">   
                <div className="texto-footer">
                    <p>Estou desponivel para novos projetos no momento.<br></br>
                        Entre em contato comigo e marcamos uma conversa 👏
                    </p>
                </div>
                <div className="linha">
                   
                </div>
                <div className="contato">
                    <p>Diegoevelyndiasoliveira@gmail.com</p>
                    <p> +55 44 9907-9784</p>
                    <figure className="icones"> 
                       <a href="https://w.app/TP3I1C" target="_blank" > <img src={whatsap} alt="icoin whatsap"/></a> 
                        <a href="https://www.linkedin.com/in/diego-dias-matos-1a105a252/" target="_blank"><img src={linkdin} alt="icoin link"/></a>
                    </figure>
                </div>
            </section>

        </footer>        
    )
    
};