export default function Album({item}) {

    return(
    <div>
        <hr/>
        <h5>{item.title}</h5>
        <p>User ID: {item.userId} - ID: {item.id}</p>
    </div>
    )

}