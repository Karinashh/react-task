import {useState} from "@types/react";
import Character from "../rickAndMorty/character";

export default function Characters() {
    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')
        .then(value => value.json())
        .then(value => {
            setCharacters(value);
        });

    return (
        <div>
            {characters.map((character, index) => (<Character item={character} key={index}/>))}
        </div>
    )
}