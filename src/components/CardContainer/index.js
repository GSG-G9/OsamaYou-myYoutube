import PropTypes from 'prop-types';

import './CardContainer.css';
import Card from './Card';

const CardContainer = (props) => {
  const { data, containerTitle } = props;

  return (
    <div>
      <div className="cardContainer">
        {data.length !== 0 && (
          <h3 className="container-title">{`Result about: ${containerTitle}`}</h3>
        )}
        {data.map((item) => (
          <Card {...item} />
        ))}
      </div>
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
  containerTitle: PropTypes.string.isRequired,
};

export default CardContainer;
