import { useState } from 'react';

import './App.css';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import fetchYoutubeSearch from '../utils/fetchYoutubeSearch';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const apiOptions = {
    q: searchValue,
    maxResults: 50,
    type: 'video',
  };

  const onSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitBtnClick = async () => {
    try {
      const re = await fetchYoutubeSearch('search', apiOptions);
      setData(re);
      // clear Input after done
      setSearchValue('');
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="App">
      <Header
        searchInputValue={searchValue}
        onSearchInputChange={onSearchInputChange}
        onSubmitBtnClick={onSubmitBtnClick}
      />
      {!error && <CardContainer data={data} />}
    </div>
  );
};

export default App;
