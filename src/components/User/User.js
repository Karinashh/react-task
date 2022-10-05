export default function User({item}) {
    return(
        <div>
            <h2>{item.name} -- {item.id}</h2>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <hr/>
        </div>
    )
}