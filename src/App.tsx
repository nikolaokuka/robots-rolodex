import { useState, useEffect, ChangeEvent } from 'react';

import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';
import HashLoader from 'react-spinners/HashLoader';
import { getData } from './utils/data.utils';

import './App.css';

export type Robot = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Robot[]>('https://jsonplaceholder.typicode.com/users')
      setRobots(users);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchInput);
    });

    setFilteredRobots(filtered);
  }, [robots, searchInput]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className='App'>
      <Title text='Robots Rolodex' />
      <SearchBox onSearchChange={onSearchChange} />
      {loading
        ? <HashLoader color='#0ccac4' size={100} />
        : <CardList robots={filteredRobots} />
      }
      <Footer />
    </div>
  );
};

export default App;
