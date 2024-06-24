import React from "react";
import lobo from "../../Assets/Lobo.png";
import Deco from "../../Assets/deco-1.svg";
import Deco2 from "../../Assets/deco.svg";
import loc from "../../Assets/icon svg localizaçao.svg";
import "./css.css";

export default function Intro() {
   
    return(
        <section className="Intro">
            <section className="imagem">
               <img src={lobo} alt="iamgemlobo" />
            </section>
            <section className="texto-info">
                <div className="TextoPrincipal">
                <img src={Deco} className="Deco" alt="Decoraçao" />
                <p className="texto titulo">Desenvolvedor Front-end & UX/UI Designer</p>
                <img src={Deco2} className="Deco2" alt="Decoraçao" />
                </div>
                <div>
                    
                    <p className="texto-loc texto"><img src={loc} alt="localizaçao" />Localizado em Assischateubriand</p>
                
                </div>
                
                
            </section>


        </section>

    );
    
}