
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({stats}) => {
    return (
<section className={styles.statistics}>
  <h2 className={styles.title}>UPLOAD STATS</h2>

  <ul className={styles.statList}>
      {stats.map (stat => (
        <li key={stat.id} className={styles.item}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
   
  </ul>
</section>
);
    };


    Statistics.propTypes = {
      title: PropTypes.string,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string,
          percentage: PropTypes.number,
        }),
      ),
    };
    

export default Statistics;