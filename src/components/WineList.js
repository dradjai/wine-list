import { useState, useEffect } from "react"
import WineCard from "./WineCard";

export default function WineList() {
  const [theWines, setTheWines] = useState();
  const [color, setColor] = useState('reds');

  const getWines = () => {
    fetch(`https://api.sampleapis.com/wines/${color}`)
      //resolved promise -> getting the response object and parsing to json
      .then(response => response.json())
      //resolved promise -> updating the state of the json data
      .then(item => setTheWines(item))
      //.then(setTheWines) -> can also be written like this if passing in the same item
      .catch(alert)
  }

  useEffect(() => {
    getWines()
  }, [color])

  return (
    <>
      <div className="buttons">
        <button onClick={ () => setColor('reds')}>Reds</button>
        <button onClick={ () => setColor('whites')}>Whites</button>
        <button onClick={ () => setColor('sparkling')}>Sparkling</button>
        <button onClick={ () => setColor('rose')}>Rose</button>
      </div>

    <section className="wine-list">
      {/* if theWines is empty this is falsy show button*/}
      {(!theWines) 
      ? <h2>Loading...</h2>
      : theWines.map(wine => (
        <WineCard key={wine.id} wine={wine} />
         
      ))
      }
    </section>
    </>
  )
}