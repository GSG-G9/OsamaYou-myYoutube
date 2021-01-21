import PropTypes from 'prop-types';

import './CardContainer.css';
import Card from './Card';

const CardContainer = (props) => {
  const { data } = props;

  return (
    <div className="cardContainer">
      {data.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
};

CardContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      channelTitle: PropTypes.string.isRequired,
      videoId: PropTypes.string.isRequired,
      publishTime: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardContainer;
