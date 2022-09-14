// Створити компонент який описує персонажа (властивості id,name,status,species,gender,image)
export default function Character(props) {
    let {item} = props;
    return (
        <div className="char">
            <h2>{item.id} - {item.name}</h2>
            <p>{item.status}, {item.species}, {item.gender}</p>
            <img src={item.image} alt={item.name}/>
        </div>
    )
}