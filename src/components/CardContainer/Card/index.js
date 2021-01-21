import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  const { title, thumbnail, channelTitle, videoId, publishTime } = props;
  const videoRoute = `/watch?v=${videoId}`;

  return (
    <div className="card">
      <div className="video">
        <div className="thumbnail">
          <Link to={videoRoute}>
            <img src={thumbnail} alt="thumbnail" />
            <span className="time">5:25</span>
          </Link>
        </div>
        <div className="info">
          <h3>
            <Link to={videoRoute}>{title}</Link>
          </h3>
          <h4>{channelTitle}</h4>
          <span>{new Date(publishTime).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  publishTime: PropTypes.string.isRequired,
};

export default Card;
