import './App.css';
import Characters from "./unit/characters/characters";
/*Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
https://rickandmortyapi.com/
https://rickandmortyapi.com/api/character
Створити 6 персонажів*/

function App() {
  return (
      <div className="App">
        <h1>Rick And Morty</h1>
        <Characters/>
      </div>

  );
}

export default App;
