import './Card.css';

const Card = ({id, name, email}) => {
  return (
    <div className='card'>
      <img
        className='card-image'
        src={`https://robohash.org/${id}`}
        alt={`robot ${name}`}
      />
      <h2 className='card-name'>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
