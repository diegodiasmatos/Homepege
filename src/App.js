import './App.css';
import Header from './Componentes/Menu';
import Intro from './Componentes/intro';
import  Experiencia  from './Componentes/experiencia';
import Academica from './Componentes/academica';
import Footer from './Componentes/Rodape';
function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Experiencia/>
      <Academica/>
      <Footer/>
    </div>
  );
}

export default App;
