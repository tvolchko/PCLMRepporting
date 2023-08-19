import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import sorter from './utils/sorter';
import { useState, useEffect } from 'react';
const XLSX = require("xlsx");


const techCities = [['Eddyville', 'Des Moines', 'Ankeny'],[ 'Cedar Rapids']]
let importedFile
const importFile = (e) => {
  console.log(e.target.files[0])
  // const formData = new FormData()
  // formData.append('file', e.target.files[0])
  // console.log(formData)

  // const workbook = XLSX.readFile(e.target.files[0])
  //   const worksheet = workbook.Sheets['query']
  //   // console.log(worksheet)
  //   const data = XLSX.utils.sheet_to_json(worksheet)
  // importedFile = data
  // console.log(importFile)
}

  const list = [['Eddyville', 'Ankeny'], ['Cedar Rapids', 'West Branch']]          


function App() {
  const [doc, setDoc] = useState([])
  const [sheet, setSheet] = useState([])
  // const handleDoc = (e) => {
  //   // setDoc(e.target.files[0])
  //   var reader = new FileReader();
  //   reader.readAsArrayBuffer(e.target.files[0]);
  //   reader.onload = function (e) {
  //     var data = new Uint8Array(reader.result);
  //     var workbook = XLSX.read(data, {type: 'JSON'});
  //     var sheet = workbook.Sheets[workbook.SheetNames[0]];
  //     setDoc(sheet)
  //     console.log(sheet)
  //   }
  // }
  const runCalc = () => {
    sorter(doc, list)
    
}
async function handleFileAsync(e) {
  const file = e.target.files[0];
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  var sheet = workbook.Sheets[workbook.SheetNames[0]];
  setDoc(XLSX.utils.sheet_to_json(sheet))

}
  useEffect(() => { (async() => {
    if(doc.length === 0){
      return null
    }
    /* Download file */
    // const f = await (await fetch(doc)).arrayBuffer();
    //   const f = doc
    // const wb = XLSX.read(doc); // parse the array buffer
    // const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    // const data = XLSX.utils.sheet_to_json(ws); // generate objects
    // setSheet(data); // update state
    // console.log(sheet)
  })(); }, [doc]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputField/>
        <div className="inputContainer">
      <input type="file" id="fileDemo" className="input" accept=".xlsx" onChange={handleFileAsync}/>
      <button onClick={runCalc}/>
      {/* <input type="button" id="loadExcel" defaultValue="import" className="button" onClick={e=>this.loadExcel(e)}/> */}
    </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
