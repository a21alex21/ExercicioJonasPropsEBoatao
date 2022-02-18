import './App.css';
import Estilos from './components/estilos/Estilos'
import MinMax from 'components/MinMax'
import Botao from './components/Botao/Botao';


function App() {
    
  return(
    <div>
      <Estilos/>
      <MinMax/>
      <MinMax min="2" max="10"/> 
      <MinMax min={4} max={15}/>
      <Titulo principal="Olá" secundario="tudo bem"/>
      <Botao/>
    </div>
  )
   
}

export default App;

