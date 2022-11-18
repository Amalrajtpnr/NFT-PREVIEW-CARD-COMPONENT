import "./App.css";
import goat from "./pict/image-equilibrium.jpg";
import ethe from "./pict/icon-ethereum.svg";
import dur from "./pict/icon-clock.svg";
import man from "./pict/image-avatar.png";

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={goat} alt="" className="picture" />

        <div className="main">
          <div className="heading">
            <h1 className="text">Equilibrium #3429</h1>
          </div>
          <div className="paragraph">
            <p className="description">
              Our Equilibrium collection promotes balance and calm
            </p>
          </div>
          <div className="features">
            <div className="coin">
              <img src={ethe} alt="" className="ethe" />
              <h1 className="values">0.041ETH</h1>
            </div>
            <div className="time">
              <img src={dur} alt="" className="watch" />
              <h1 className="duration">3 days left</h1>
            </div>
          </div>
          <div className="tailend"></div>
          <div className="fragments">
            <img src= {man} alt="" className="ava" /> 
            <h1 className="line">Creation of <h1 className="person">Jules Wyvern</h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
