import {useEffect, useState} from "react";
import User from "./User";

export default function Users() {
    let[users, setUsers] = useState([]);
    let[user, setUser] = useState(null);

    const lift = (obj) => {
      setUser(obj)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then (value => value.json())
            .then (value => {
                setUsers(value);
            })
    }, []);

    return (
        <div>
            <hr/>
            <h3>{user?.name}</h3>
            <p>Email: {user?.email}, city: {user?.address.city}</p>
            <hr/>

            {users.map((user, index) => (<User user={user} key={index} lift={lift}/>))}
        </div>
    );

}