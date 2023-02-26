import './Header.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ getSearchTerm }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Use useEffect to make sure that this will after we have a value for serach term
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
          <Link className="Header-btn" to="/create-recipe">
            Create Recipe
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
