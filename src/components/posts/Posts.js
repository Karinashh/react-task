import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {
    let {postId} = useParams();

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            });
        }, []);

    return (
        <div>
            {
                posts && (<Post item={posts}/>)
            }

        </div>
    )
}