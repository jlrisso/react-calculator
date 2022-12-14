import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import {evaluate, sqrt, square, divide} from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(prev => prev + val)
  }

  const calcularResultado = () =>{
    setInput(prev => prev ? evaluate(input): '')
  }


  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img src="" alt="" className='fcc-logo'/>
      </div>
      <div className="contenedor-calculadora">
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClick = {() => setInput(divide(1, input))}>1/x</Boton>
            <Boton manejarClick = {() => setInput(square(input))}>x²</Boton>
            <Boton manejarClick = {() => setInput(sqrt(input))}>√x</Boton>
            <Boton manejarClick = {() => setInput('')}>C</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>1</Boton>
            <Boton manejarClick = {agregarInput}>2</Boton>
            <Boton manejarClick = {agregarInput}>3</Boton>
            <Boton manejarClick = {agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>4</Boton>
            <Boton manejarClick = {agregarInput}>5</Boton>
            <Boton manejarClick = {agregarInput}>6</Boton>
            <Boton manejarClick = {agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>7</Boton>
            <Boton manejarClick = {agregarInput}>8</Boton>
            <Boton manejarClick = {agregarInput}>9</Boton>
            <Boton manejarClick = {agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {calcularResultado}>=</Boton>
            <Boton manejarClick = {agregarInput}>0</Boton>
            <Boton manejarClick = {agregarInput}>.</Boton>
            <Boton manejarClick = {agregarInput}>/</Boton>
          </div>
          <div className='fila'></div>

      </div>

    </div>
  )
}

export default App
