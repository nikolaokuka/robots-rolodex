import {useState, useEffect} from 'react';

import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';

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
    <div className='App'>
      <Title text='Robots Rolodex' />
      <SearchBox onSearchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
      <Footer />
    </div>
  );
};

export default App;
