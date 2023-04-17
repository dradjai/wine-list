import { useState } from "react"
import WineCard from "./WineCard";

export default function WineList() {
  const [theWines, setTheWines] = useState();
  const getWines = () => {
    fetch('https://api.sampleapis.com/wines/reds')
      //resolved promise -> getting the response object and parsing to json
      .then(response => response.json())
      //resolved promise -> updating the state of the json data
      .then(item => setTheWines(item))
      //.then(setTheWines) -> can also be written like this if passing in the same item
      .catch(alert)
  }
  return (
    <section className="wine-list">
      {/* if theWines is empty this is falsy show button*/}
      {(!theWines) 
      ? <button onClick={getWines}>Get Wine List</button>
      : theWines.map(wine => (
        <WineCard key={wine.id} wine={wine} />
         
      ))
      }
    </section>
  )
}