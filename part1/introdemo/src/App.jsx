import { useState } from "react"

const Button = (props) =>{
  return (<button onClick={props.onClick}>{props.text}</button> )
}

const Display = (props) =>{
  return(<div>{props.counter}</div>)
}



const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <div>
      {left}
      <Button onClick = {handleLeftClick} text = "Left"/>
      <Button onClick = {handleRightClick} text = "Right"/>
      {right}
    
      <History allClicks = {allClicks}/>
    </div>
  )
}
export default App