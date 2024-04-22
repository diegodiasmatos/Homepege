import React from "react";
import "./css.css";
import Experienciaimg from "../../Assets/Experiência.jpg";
export default function Experiencia() {
    return( 
        <section className="Experiencia" id="EXP">
            <div className="Banner-Exp">
                <div className="EXP-BANER-TAMANHO">
                <img src={Experienciaimg} alt="Experiencias" />
                </div>
            
            </div>
            <section className="Exp-info">
                <div className="EU-text">
                    <p>Desenvolvo pequenos projetos utilizando apenas <span>Html</span>, <span>Css</span>,<span>Javascript</span> & <span>React.</span> Para a aplicativos web como o site da Barber shop a onde usei <span>UI/UX Design</span> no projeto.</p>
                </div>
            
                <div className="Cointeiner">                
                    <div className="card">
                        <h2>Sorveteria</h2>
                        <p>O projeto da  Sorveteria e umas das minhas melhores experiências que já estive participando, focado totalmente no front-end.</p>
                    </div>              
                <div className="card-2" >
                        <h2>Estagio</h2>
                     <div className="card-info">
                        <p className="usado">Html</p>
                        <p className="usado">css</p>
                        <p className="usado">JavaScript</p>
                        <p className="usado">UI Design</p>
                        <p className="usado">Ux Design</p>
                        <p className="usado">React</p>
                    </div>
                </div>
                          
                </div>
                
            <div className="Cointeiner">
                    <div className="card">
                        <h2>Barber Shop</h2>
                        <p>O projeto barber shop focado em uma barbearia feita totalmente em React, podendo alterar o tema das cores.</p>
                    </div>              
                <div className="card-2">
                    <h2>Estagio</h2>
                    <div className="card-info">
                        <p className="usado">Html</p>
                        <p className="usado">css</p>
                        <p className="usado">JavaScript</p>
                        <p className="usado">React</p>
                    </div>
                    
                </div>                
            </div>
            </section>

        </section>
);
    
}