import { useState } from 'react';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import Label from './components/Label'

function App() {

    const [Distancia,setDistancia] = useState('');
    const [Tempo,setTempo] = useState('');
    const [resultado,setResultado] = useState('');
  
    function calcularResultado(){
      console.log('Distancia: '/Distancia)
      
      setResultado(parseFloat(Distancia)/parseFloat(Tempo));
    }

    function ReiniciarCalculo(){
    setResultado('');
    setDistancia('');
    setTempo('');
    }

  return (
    <div className="App">
     <h2>Velocidade Media</h2>

      <div class="container text-center">
      <div class="row">
      <div class="col-6">

     <div className='text-start mt-3'>
      <label>Distancia</label>
      <Input onChange={(e)=>setDistancia(e.target.value)} value={Distancia}/>
     </div>
      
      
     <div className='text-start mt-3'>
      <label>Tempo</label>
      <Input onChange={(e)=>setTempo(e.target.value)} value={Tempo}/>
     </div>


     </div>
     <div class="col-6 mt-5">
     <label>Resultado</label>
     <Input onChange={(e)=>setResultado(e.target.value)} value={resultado}/>
     </div>
    
     <div className='col-12 d-flex justify-content-center flex-column mt-5'>

    <Button onClick={calcularResultado} label="Calcular" cor="verde" /> 
    <Button onClick={ReiniciarCalculo}label="Reiniciar" cor="vermelho" /> 


    </div>
    </div>
    </div>

   </div>

  );
}

export default App;
