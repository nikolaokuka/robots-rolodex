import Card from '../Card/Card';

import './CardList.css';

const CardList = ({robots}) => {
  return (
    <div className='card-list'>
      {robots.map(({id, name, email}) => (
        <Card
          key={id}
          id={id}
          name={name}
          email={email}
        />
      ))}
    </div>
  );
};

export default CardList;
