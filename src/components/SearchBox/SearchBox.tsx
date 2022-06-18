import { ChangeEvent } from 'react';
import './SearchBox.css';

type SearchBoxProps = {
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onSearchChange }: SearchBoxProps) => (
  <input
    className='search-box'
    placeholder='search robots'
    type='search'
    onChange={onSearchChange}
  />
);

export default SearchBox;
