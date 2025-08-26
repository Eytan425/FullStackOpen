import { useState } from "react"


const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}



const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter-1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
      <button onClick={decreaseByOne}>minus</button>
      
    </div>
  )
}
export default App