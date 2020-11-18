import logo from './spongebob.png';
import bob from './original.gif';
import giphy from './giphy.gif';
import './App.css';

function Goodnight() {
  return (
    <div className="goodNight">
      <div>
        <p>아니요?뚱인데여?</p>
        <img src={giphy} alt=" " />
      </div>

    </div>
  );
}

export default Goodnight;