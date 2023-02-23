import './Header.css';
import { useState } from 'react';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <h1 className="Header-heading">Cooking Recipe</h1>

        <nav className="Header-nav">
          <label className="Header-nav-label" htmlFor="search">
            Search:
          </label>
          <input className="Header-nav-input" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button className="Header-btn">Create Recipe</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
