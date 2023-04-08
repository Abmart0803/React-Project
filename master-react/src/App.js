import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div>
      <h1 title="This is the heading"> Heading - JSX Method.</h1>
      <p id="para1">This is the Parapgrah</p>
      <p className="para2">This is the second Paragraph</p>
      <div>
        <labe htmlfor="input1">Some Data</labe>
        <input id="para1" name="input1"></input>
        <div>Hello World</div>
      </div>
    </div>
  );
}

export default App;

