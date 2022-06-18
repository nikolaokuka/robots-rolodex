import { Robot } from '../../App';
import Card from '../Card/Card';

import './CardList.css';

type CardListProps = {
  robots: Robot[];
};

const CardList = ({ robots }: CardListProps) => {
  return (
    <div className='card-list'>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          robot={robot}
        />
      ))}
    </div>
  );
};

export default CardList;
