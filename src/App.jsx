import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const getSearchTerm = (searchTerm) => {
    setSearchValue(searchTerm);
  };
  return (
    <>
      <Header getSearchTerm={getSearchTerm} />
      <main>
        <div className="container">
          <Recipes searchValue={searchValue} />
        </div>
      </main>
    </>
  );
}

export default App;
