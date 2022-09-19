import './App.css';
import Launches from "./components/launches/Launches";
/*є API от SpaceX
https://api.spacexdata.com/v3/launches/
    потрібно вивести всі запуски кораблів окрім 2020 року
репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/
function App() {
  return (
    <div className="App">
      <h1>SpaceX launches</h1>
      <Launches/>
    </div>
  );
}

export default App;
