import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fibonacci from './Fibonacci';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/other">Other Page</Link>
          <div>
            <Route exact path="/" component={Fibonacci} />
            <Route path="/other" component={OtherPage} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
