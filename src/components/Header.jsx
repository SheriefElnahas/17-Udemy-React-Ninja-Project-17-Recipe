import './Header.css';
import { useEffect, useState } from 'react';

function Header({ getSearchTerm }) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getSearchTerm(searchTerm);
  }, [searchTerm]);

  return (
    <header className="Header">
      <div className="Header-wrapper">
        <h1 className="Header-heading">Cooking Recipe</h1>

        <nav className="Header-nav">
          <label className="Header-nav-label" htmlFor="search">
            Search:
          </label>
          <input className="Header-nav-input" type="text" value={searchTerm} onChange={handleInputChange} />
          <button className="Header-btn">Create Recipe</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
