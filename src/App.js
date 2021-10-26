import DisplaySimpsons from './components/DisplaySimpsons';
import axios from 'axios';
import React, { useEffect, useState } from "react";

const sampleSimpsons = {
  quote: "Shut up, brain. I got friends now. I don't need you anymore.",
  character: "Lisa Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Right"
};
function App() {
  const [simpsons, setSimpsons] = useState(sampleSimpsons);
  const getSimpsons = () => {
    // Send the request
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpsons(data[0]);
      });
  };
  return (
    <div classname='App'>
      <DisplaySimpsons simpsons={simpsons}/>
      <button type="button" onClick={getSimpsons}>Get simpsons</button>
    </div>
  );
}

export default App;