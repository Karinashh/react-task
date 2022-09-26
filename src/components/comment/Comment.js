import {Link} from "react-router-dom";

export default function Comment({item}) {

    return(
        <div>
            <hr/>
            <h4>{item.name}</h4>
            <h5>{item.body}</h5>
            <p>Email: {item.email}</p>
            <p>Post ID: {item.postId}</p>
            <div>
                <Link to={'/posts/' + item.postId}>Post details</Link>
            </div>
        </div>
    )


}