
import React, { useState } from 'react';
import { StrictMode } from "react";
import ReactDOM from "react-dom";


function SelectRoute({inputCountry}){
  
  switch(inputCountry){
    case 'USA': 
      return <ul><USA /></ul>;
    case 'CAN':
      return <ul><CAN /></ul>;
    case 'MEX': 
      return <ul><MEX /></ul>;
    case 'BLZ': 
      return <ul><BLZ /></ul>;
    case 'GTM': 
      return <ul><GTM /></ul>;
    case 'SLV': 
      return <ul><SLV /></ul>;
    case 'HND': 
      return <ul><HND /></ul>;
    case 'NIC': 
      return <ul><NIC /></ul>;
    case 'CRI': 
      return <ul><CRI /></ul>;
    case 'PAN': 
      return <ul><PAN /></ul>;
    default:
      return <div></div>;
  }
}
function USA(){
  return <li>USA</li>;
}
function CAN(){
  return <div><USA /><li>CAN</li></div>;
}
function MEX(){
  return <div><USA /><li>MEX</li></div>;
}
function BLZ(){
  return <div><MEX /><li>BLZ</li></div>;
}
function GTM(){
  return <div><MEX /><li>GTM</li></div>;
}
function SLV(){
  return <div><GTM /><li>SLV</li></div>;
}
function HND(){
  return <div><GTM /><li>HND</li></div>;
}
function NIC(){
  return <div><HND /><li>NIC</li></div>;
}
function CRI(){
  return <div><NIC /><li>CRI</li></div>;
}
function PAN(){
  return <div><CRI /><li>PAN</li></div>;
}


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


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
