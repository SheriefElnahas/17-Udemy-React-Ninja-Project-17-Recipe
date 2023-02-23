import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Recipes />
        </div>
      </main>
    </>
  );
}

export default App;
