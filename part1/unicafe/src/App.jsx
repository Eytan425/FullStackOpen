import { useState } from "react";
import Statistics from "./components/Statistics";


const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodButton = () =>{
    setGood(good+1)
  }
  const neutralButton = () =>{
    setNeutral(neutral+1)
  }
  const badButton = () =>{
    setBad(bad+1)
  }
  const total = bad + good + neutral;
  const average = total / 3
  
  return (
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      average={average}
      goodButton={goodButton}
      neutralButton={neutralButton}
      badButton={badButton}
    />
  )
}

export default App;