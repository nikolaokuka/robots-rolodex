import {useState, useEffect} from 'react';

import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  useEffect(() => {
    const filtered = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchInput);
    });

    setFilteredRobots(filtered);
  }, [robots, searchInput]);

  const onSearchChange = (event) => {
    setSearchInput(event.target.value.toLocaleLowerCase());
  };

  return (
    <div>
      <SearchBox onSearchChange={onSearchChange} />
      {filteredRobots.map((robot) => (
        <h1 key={robot.id}>{robot.name}</h1>
      ))}
    </div>
  );
};

export default App;
