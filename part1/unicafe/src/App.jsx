import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0})
  // const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
    console.log(randomIndex);
  }

  const handleVoteClick = () => {
    const newVotes = {...votes}
    console.log(newVotes)
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const getAnecdoteWithMostVotes = () => {
    const indexWithMostVotes = Object.keys(votes).find(key => votes[key] === Math.max(...Object.values(votes)))
    return anecdotes[indexWithMostVotes]
  }

  const getMostVotes = () => Math.max(...Object.values(votes))

  return (
    <div>
      <h1> Anecdotes of the day</h1>
      <table>
        <tbody>
          <tr>
            <td>{anecdotes[selected]}</td>
          </tr>
          <tr>
            <td>has {votes[selected]} votes</td>
          </tr>
          <tr>
            <td>
              <button onClick={handleRandomAnecdote}>Next Anecdote</button>
              <button onClick={handleVoteClick}>Vote</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1> Anecdote with the most votes</h1>
      <table>
        <tbody>
        <tr>
          <td>{getAnecdoteWithMostVotes()}</td>
        </tr>
        <tr>
          <td>{getMostVotes()}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
