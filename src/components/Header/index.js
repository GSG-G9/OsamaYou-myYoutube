import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
  const { onSearchInputChange, onSubmitBtnClick, searchInputValue } = props;
  return (
    <header className="top-bar">
      <div className="container">
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Search Videos"
            value={searchInputValue}
            onChange={onSearchInputChange}
            autoComplete="off"
          />
          <button type="submit" onClick={onSubmitBtnClick}>
            <img
              className="search-icon"
              src="./resources/search-icon.svg"
              alt="search-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
  onSubmitBtnClick: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
};

export default Header;
