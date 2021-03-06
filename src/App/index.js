import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import fetchYoutubeSearch from '../utils/fetchYoutubeSearch';
import Video from '../components/Video';

const MAX_RESULTS = 50;
const REGION_CODE = 'NA';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [containerTitle, setContainerTitle] = useState('');
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchYoutubeSearch('videos', {
        maxResults: MAX_RESULTS,
        chart: 'mostPopular',
        regionCode: REGION_CODE,
      });

      setContainerTitle(`Popular video in ${REGION_CODE}`);
      setData(result);
    };

    fetchData();
  }, []);

  const onSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitBtnClick = async () => {
    try {
      const re = await fetchYoutubeSearch('search', {
        q: searchValue,
        maxResults: MAX_RESULTS,
        type: 'video',
      });
      setData(re);
      setContainerTitle(searchValue);
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
      <Switch>
        <Route exact path="/">
          {!error && (
            <CardContainer data={data} containerTitle={containerTitle} />
          )}
        </Route>
        <Route exact path="/watch">
          <Video />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
