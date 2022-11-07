import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [dane, setDane] = useState<{[key: string]: any}> ([])

  useEffect(()=>{
    axios
    .get('https://ckan2.multimediagdansk.pl/departures?stopId=1979')
      .then((response) => {
        console.log(response.data.departures);
        setDane(response.data.departures);
      })
      .catch((err) => {
        console.log(err.message);
      })

    // const interval = setInterval(() => {
    //   fetch('https://ckan2.multimediagdansk.pl/departures?stopId=1979')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data.departures))
    //   .catch((err) => {
    //     console.log(err.message);
    //   })

    // },10000);
    // return () => clearInterval(interval);
    
},[])
  return (
    <div className="App">
      {dane.map((dana: { [key: string]: any}) =>(
        <div >{dana.headsign}</div>
      ))}
    </div>
  );
}

export default App;
