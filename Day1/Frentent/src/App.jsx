import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/app/jocks")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []); // ✅ Add dependency array here

  return (
    <>
      <h1>Jokes {jokes.length}</h1>
      <div className="p-4">
        {jokes.map((joke) => (
          <div key={joke.id} className="bg-blue-50 p-4 border rounded">
            <h2 className="font-bold text-xl">{joke.title}</h2>
            <p className="text-gray-600">{joke.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
