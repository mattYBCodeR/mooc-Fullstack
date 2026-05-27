import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  if (text !== "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value} %</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (
      <div>
        <h1> statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  }

  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1> statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} unit=" %" />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}> {text}</button>;
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const hanldeIsGood = () => {
    console.log("Increasing good to", good + 1);
    setGood(good + 1);
    setTotal(total + 1);
  };

  const hanldeIsBad = () => {
    console.log("Increasing bad to", bad + 1);
    setBad(bad + 1);
    setTotal(total + 1);
  };

  const hanldeIsNeutral = () => {
    console.log("Increasing neutral to", neutral + 1);
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={hanldeIsGood} text="good" />
      <Button onClick={hanldeIsNeutral} text="neutral" />
      <Button onClick={hanldeIsBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  )
}

export default App