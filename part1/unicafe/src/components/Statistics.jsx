import StatisticLine from "./StatisiticLine"

const Statistics = (props) =>{
    return(
    <div>
      <h1>Give Feedback</h1>

      <button onClick={props.goodButton}>Good</button>
      <button onClick={props.neutralButton}>Neutral</button>
      <button onClick={props.badButton}>Bad</button>

      <h3>Statistics</h3>
      {props.total !== 0 ? (
        <table>
          <tbody>
            <StatisticLine text="Good" value={props.good} />
            <StatisticLine text="Neutral" value={props.neutral} />
            <StatisticLine text="Bad" value={props.bad} />
            <StatisticLine text="Total" value={props.total} />
            <StatisticLine text="Average" value={props.average} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
      
    </div>
  )
}

export default Statistics