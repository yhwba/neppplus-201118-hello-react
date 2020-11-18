// import logo from './spongebob.png';
import bob from './original.gif';
import './App.css';
import Hello from './Hello';
import Goodnight from './Goodnight';

function App() {
  var logo = "spongebob.png";
  var text ="스폰지 밥입니다.";
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={bob} className="" alt="logo" />
        <p>
          {text} //
        </p>
        <Goodnight/>
        <Hello />
        
      </header>
    </div>
  );
}

export default App;
