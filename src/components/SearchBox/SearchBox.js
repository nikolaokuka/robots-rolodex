import './SearchBox.css';

const SearchBox = ({onSearchChange}) => {
  return (
    <input
      className='search-box'
      placeholder='search robots'
      type='search'
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
