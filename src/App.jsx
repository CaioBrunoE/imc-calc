import { data } from './data/data'
import { useState } from 'react'

import ImcCalc from './components/ImcCalc'
import './App.css'
import ImcTable from './components/ImcTable';


function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc=(e , height, weight)=>{
    e.preventDefault();
    console.log("executou");
  }

  return (

    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable />
      )}
    </div>


  )
}

export default App
