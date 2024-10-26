import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
//import { StatisticsItem } from '..';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp key="1" />,
  <MdPeople key="2" />,
  <MdOutlineProductionQuantityLimits key="3" />,
  <GiTreeDoor key="4" />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }, index) => (
          <StatisticsItem
            title={title}
            total={total}
            key={id}
            icon={icons[index]}
          />
        ))}
      </ul>
    </>
  );
};
