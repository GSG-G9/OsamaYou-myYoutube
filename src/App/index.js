import { useState } from 'react';

import './App.css';
import Header from '../components/Header';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const onSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitBtnClick = () => {
    console.log(searchValue);

    // clear Input after done
    setSearchValue('');
  };

  return (
    <div className="App">
      <Header
        searchInputValue={searchValue}
        onSearchInputChange={onSearchInputChange}
        onSubmitBtnClick={onSubmitBtnClick}
      />
    </div>
  );
}

export default App;
