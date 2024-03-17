import blake from './images/blake.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='top'>
        <img src={blake} className="App-logo" alt="logo" />
        <h2>
          Blake Minix
        </h2>
        </div>
        <div className='section'>
        <p className='header-text'>My Links</p>
        <div className='link-list'>
          <a href='https://github.com/blakeminix' className='App-link' target='_blank' rel="noopener noreferrer">GitHub</a>
          <a href='https://www.linkedin.com/in/blakeminix/' className='App-link' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        </div>
        <div className='section'>
        <p className='header-text'>About Me</p>
      <p className='custom-text'>
          3rd Year Computer Science Student
        </p>
        <p className='custom-text'>
          Georgia Institute of Technology
        </p>
        <p className='custom-text'>
          Threads: Systems & Architecture and Information Internetworks
        </p>
        <p className='custom-text'>
          Expected Graduation Date: Fall 2024
        </p>
        </div>
      </header>
    </div>
  );
}

export default App;
