import React from "react";
import formaçao from"../../Assets/FORMAÇAO.svg";
import deco from "../../Assets/Decocurso.svg";
import "./Css.css";

export default function Academica() {
    return(
        <section className="academic" id="formaçao">
          <section className="container-academic" >
                <section className="Icon">
                    <img className="iconimg" src={formaçao} alt="formaçao"/>
                </section>
              <section className="card-aca" >
                <p className="TextoACADEMICO">Desenvolvo pequenos projetos utilizando apenas <span>Html</span>, <span> Css </span> , <span>Javascript </span>& <span>React.</span>Para a aplicativos web como o site da Barber shop a onde usei <span>UI/UX Design</span> no projeto.</p>
                <section className="elementos">
                    <div className="dev">                    
                        <p className="tipo-curs titulodev">Curso</p>
                        <p className="tipo-text"> programador <br></br> front-end</p>
                        <p className="intistuiçao titulodev">Devmedia</p>
                    </div>                   
                    <div className="dev">
                        <p className="tipo-curs titulodev">Curso</p>
                        <p className="tipo-text"> UX / UI Designer e <br></br> Desenvolvedor(a) Front End.</p>
                        <p className="intistuiçao titulodev">Origamid</p>
                    </div>
                

                </section>
             </section>
           </section> 

        </section>
    );
    
};