// import logo from './spongebob.png';
import bob from './original.gif';
import './App.css';

function App() {
  var logo = "spongebob.png";
  var text ="스폰지 밥입니다.";
  var number = (167+6841-5665)*1155
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={bob} className="" alt="logo" />
        <p>
          {text} //
        </p>
        <span className="num">{number}</span>
        <a
          className="App-link"
          href="https://naver.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          아닌데요? 뚱인데요?
        </a>
      </header>
    </div>
  );
}

export default App;
