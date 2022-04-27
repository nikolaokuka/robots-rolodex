import {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  return (
    <div>
      {robots.map((robot) => (
        <h1 key={robot.id}>{robot.name}</h1>
      ))}
    </div>
  );
};

export default App;
