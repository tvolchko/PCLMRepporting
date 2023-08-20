import logo from './logo.svg';
import './App.css';
import sorter from './utils/sorter';
import { useState, useEffect } from 'react';
import HubCard from './components/HubCard';
const XLSX = require("xlsx");



  const list = [['Eddyville', 'Des Moines', 'Ankeny'],[ 'Cedar Rapids', 'West Branch'],['High River', 'Lethbridge'], ['Schuyler', 'Albion', 'Carleton', 'Columbus', 'Dakota City', 'Elwood', 'Fremont', 'Gibbon', 'Holdrege', 'Lincoln', 'Nebraska City', 'Omaha', "O'Neill", 'Ord', "Ravenna", "Shelton", 'Wood River'], ['Sidney', 'Dayton', 'Lima', "St. Marys"], ['Milwaukee', 'Appleton', 'Butler', 'Green Bay', 'Little Chute', 'Madison', 'Sheboygan', 'Sussex', 'Watertown'], ['Wichita', 'Dodge City', 'Hutchinson', 'Ogallah', 'Wakeeny'], ['Fresno'], ['Waco', 'Abilene', 'Austin', 'Dallas', 'Fort Worth', 'Giddings', 'Grand Prairie', 'HASLET', 'Houston', 'Round Rock', 'San Antonio', 'Seguin', 'Temple', 'Weatherford'], ['Fort Morgan'], ['North Olmsted', 'Akron', 'Circleville', 'Cleveland', 'Delta', 'Toledo', 'Wooster'], ['Blair'], ['Wayzata', 'Albert Lea', 'Big Lake', 'Bloomington', 'Elk River', 'Hopkins', 'Maynard', 'Minneapolis', 'Minnetonka', 'Monticello', 'New Richland', 'Owatonna', 'Pipestone', 'Plymouth', 'Savage'], ['Olathe', 'Atchinson', 'California', 'Forest City', 'Kansas City', 'Marshall', 'Salina', 'Topeka'], ['St Clair', 'SAINT CLAIR'], ['Lewisburg', 'Bloomingburg', 'Brookville', 'Chillicothe', 'Cincinnati', 'New Madison', 'New Paris'], ['Winnipeg', 'Brandon', 'Carberry', 'Elm Creek', 'Morris', 'Plumas', 'Saint Boniface', 'Winkler'], ['Hammond', 'Chicago', 'Lafayette', 'Mentone', 'Naperville', 'Portage', 'West Lafayette'], ['Gainesville', 'Atlanta', 'Dalton', 'Flowery Branch', 'Newnan', 'Peachtree City'], ['Wyalusing', 'Hazelton', 'Hazleton', 'South Lansing'], ['Friona', 'Amarillo', 'Bovina', 'Dalhart', 'Hart', 'Hereford', 'Kerrick', 'Lockney', 'Lubbock', 'Plainview'], ['Fort Dodge', 'Iowa Falls', 'Mason City']]        


function App() {
  const [doc, setDoc] = useState([])
  const [hubs, setHubs] = useState([])
  // let hubs = []

  const runCalc = () => {
    let x = sorter(doc, list)
    console.log(x)
    setHubs(x)
    console.log(hubs)
    
}
async function handleFileAsync(e) {
  const file = e.target.files[0];
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  var sheet = workbook.Sheets[workbook.SheetNames[0]];
  setDoc(XLSX.utils.sheet_to_json(sheet))

}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="inputContainer">
      <input type="file" id="fileDemo" className="input" accept=".xlsx" onChange={handleFileAsync}/>
      <button onClick={runCalc}>Run Calculation</button>
    </div>
    {hubs.length != 0 ? <HubCard hubs={hubs}/> : null}
      </header>
    </div>
  );
}

export default App;
