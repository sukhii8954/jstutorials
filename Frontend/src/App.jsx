import { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
    //  connecting frontend and backend ******
    // we added proxy in viteconfig file which auto 
    // append before /api and origin request would
    //  also be from that url we added in proxy.

      .get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>chai and full stack</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, idx) =>(  // <-- used parenthisis as we dont want to use return keyword
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div> 
      ))
      }
    </>
  );
}

export default App;
