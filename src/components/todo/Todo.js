export default function Todo({item}) {

    return(
        <div>
            <hr/>
            <p>{item.title} - {item.userId} - {item.id}</p>
        </div>
    )
}