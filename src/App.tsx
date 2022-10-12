import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(()=>{
    fetch('https://ckan2.multimediagdansk.pl/departures?stopId=1979')
      .then((response) => response.json())
      .then((data) => console.log(data))
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
      
    </div>
  );
}

export default App;
