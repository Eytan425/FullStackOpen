const Hello = (props) =>{
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Hello name = 'Eytan'/>
    </div>
  )
}

export default App

