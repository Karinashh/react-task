import {useState} from "react";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([])

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => {
            setComments(value);
        });
    return(
        <div>
            {comments.map((comment) => (<Comment item={comment} key={comment.id}/>))}
        </div>
    )
}