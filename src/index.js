
import React, { useState } from 'react';
import { StrictMode } from "react";
import ReactDOM from "react-dom";

//Parse the User input
function SelectRoute({inputCountry}){
  switch(inputCountry){
    case 'USA': return <ul><USA /></ul>;
    case 'CAN': return <ul><CAN /></ul>;
    case 'MEX': return <ul><MEX /></ul>;
    case 'BLZ': return <ul><BLZ /></ul>;
    case 'GTM': return <ul><GTM /></ul>;
    case 'SLV': return <ul><SLV /></ul>;
    case 'HND': return <ul><HND /></ul>;
    case 'NIC': return <ul><NIC /></ul>;
    case 'CRI': return <ul><CRI /></ul>;
    case 'PAN': return <ul><PAN /></ul>;
    default: return <div></div>;
  }
}

//Each country has a function, which returns the bulleted 
//list of previous countries plus a bullet for itself
function USA(){ return <li>USA</li>; }
function CAN(){ return <><USA /><li>CAN</li></>; }
function MEX(){ return <><USA /><li>MEX</li></>; }
function BLZ(){ return <><MEX /><li>BLZ</li></>; }
function GTM(){ return <><MEX /><li>GTM</li></>; }
function SLV(){ return <><GTM /><li>SLV</li></>; }
function HND(){ return <><GTM /><li>HND</li></>; }
function NIC(){ return <><HND /><li>NIC</li></>; }
function CRI(){ return <><NIC /><li>CRI</li></>; }
function PAN(){ return <><CRI /><li>PAN</li></>; }


//Builds the page the user sees
//Includes the user input and output list
function App() {
  const [inputCountry, setInputCountry] = useState([]);

  return (
    <div className="App">
      Enter Destination Country: 
      <br/><br/>
      <input onChange={e => {setInputCountry(e.target.value)}} ></input>
      <SelectRoute inputCountry={inputCountry} />
    </div>
  );
}

//Displays the App
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
