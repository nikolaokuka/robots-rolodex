import {useState, useEffect} from 'react';

import SearchBox from './components/SearchBox/SearchBox';

import './App.css';
import CardList from './components/CardList/CradList';

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
      {filteredRobots.map(({id, name}) => (
        <CardList
          key={id}
          id={id}
          name={name}
        />
      ))}
    </div>
  );
};

export default App;
