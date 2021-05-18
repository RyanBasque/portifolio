import './App.css';

import Router from '../routes';

import Header from '../components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
