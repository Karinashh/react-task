// Описати всю сім'ю сімпсонів (5 персонажів)
export default function SimpsonsCharacters(props) {
    let {characterName, characterPicture, characterInfo} = props;
    return (
        <div className="card">
            <h2>{characterName}</h2>
            <img src={characterPicture} alt={characterName}/>
            <p>{characterInfo}</p>
        </div>
    )
}