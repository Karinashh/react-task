export default function Post({item}) {

    return(
        <div>
            <h2>{item.title}</h2>
            <h3>{item.body}</h3>
            <p>{item.id}</p>
        </div>
    )
}