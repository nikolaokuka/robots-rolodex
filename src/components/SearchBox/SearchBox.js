import './SearchBox.css';

const SearchBox = ({onChangeHandler}) => {
  return (
    <input
      className='search-box'
      placeholder='search robots'
      type='search'
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
