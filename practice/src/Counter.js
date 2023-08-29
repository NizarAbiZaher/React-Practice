import { useState } from "react"

const Home = () => {
    // Setting the counter for buttons
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
  }

  export default Home