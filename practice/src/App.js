import { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const App = () => {
// setting
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // Handle States
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Handle votes & Counting
  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  // Calculating most votes
  const mostVotes = votes.indexOf(Math.max(...votes))

  return (
    <div className="App">

      <div className='feedback'>
        <h1>Give Feedback</h1>

        <Button 
        handleClick={() => setGood(good + 1)} 
        text='Good'
        />

        <Button 
        handleClick={() => setNeutral(neutral + 1)}
        text='Neutral'/>

        <Button 
        handleClick={() => setBad(bad + 1)}
        text='Bad'/>
      </div>

      <div className='stats'>
        <h1>Statistics</h1>
        <div className='good'>
          <p>Good: {good}</p>
        </div>

        <div className='neutral'>
          <p>Neutral: {neutral}</p>
        </div>

        <div className='bad'>
          <p>Bad: {bad}</p>
        </div>

        <div className='all'>
          <p>All: {bad + good + neutral}</p>
        </div>
        
        <div className='anecdotes'>
          <h1>Anecdotes</h1>
          <Button 
            handleClick={() => setSelected(selected === anecdotes.length - 1 ? 0 : selected + 1)}
            text='Next Anecdote'
          />
          <Button 
             handleClick={handleVote}
            text='Vote'
          />
          <p>{anecdotes[selected]} Votes: {votes[selected]}</p>
        </div>

        <div className='highestVotes'>
          <h1>Most Votes</h1>
          {votes[mostVotes] > 0 ? (
            <div>
              <p>{anecdotes[mostVotes]}</p>
              <p>Votes: {votes[mostVotes]}</p>
            </div>
          ) : (
            <p>No votes yet</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
