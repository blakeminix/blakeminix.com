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
        <div className='section'>
          <p className='header-text'>Relevant Coursework</p>
          <p className='course'>
            CS 3220: Processor Design
          </p>
          <p className='course'>
            CS 3251: Computer Networking I
          </p>
          <p className='course'>
            CS 4240: Compilers & Interpreters
          </p>
          <p className='course'>
            CS 3312: Project Implementation
          </p>
          <p className='course'>
            CS 3311: Project Design
          </p>
          <p className='course'>
            CS 3210: Design of Operating Systems
          </p>
          <p className='course'>
            CS 4400: Introduction to Database Systems
          </p>
          <p className='course'>
            ECE 2031: Digital Design Lab
          </p>
          <p className='course'>
            CS 2200: Systems and Networks
          </p>
          <p className='course'>
            CS 2340: Objects and Design
          </p>
          <p className='course'>
            CS 3510: Design & Analysis of Algorithms
          </p>
          <p className='course'>
            CS 1332: Data Structures and Algorithms
          </p>
          <p className='course'>
            CS 2110: Computer Organization & Programming
          </p>
          <p className='course'>
            ISYE 3770: Statistics and Applications
          </p>
          <p className='course'>
            MATH 1554: Linear Algebra
          </p>
          <p className='course'>
            MATH 2550: Introduction to Multivariable Calculus
          </p>
          <p className='course'>
            PHYS 2211: Introduction to Physics I
          </p>
          <p className='course'>
            LMC 3431: Technical Communication Approaches
          </p>
          <p className='course'>
            LMC 3432: Technical Communication Strategies
          </p>
        </div>
        <div className='section'>
          <p className='header-text'>
            Technical Skills
          </p>
        </div>
        <div className='section'>
          <p className='header-text'>
            Projects
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
