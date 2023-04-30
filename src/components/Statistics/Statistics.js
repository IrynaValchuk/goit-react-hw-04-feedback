import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.list}>
      <li>
        <span className={css.label}>Good: </span>
        {good}
      </li>
      <li>
        <span className={css.label}>Neutral: </span>
        {neutral}
      </li>
      <li>
        <span className={css.label}>Bad: </span>
        {bad}
      </li>
      <li>
        <span className={css.label}>Total: </span>
        {total}
      </li>
      <li>
        <span className={css.label}>Positive feedback: </span>
        {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
