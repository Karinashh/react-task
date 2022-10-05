import {useEffect, useState} from "react";
import User from "../User/User";
import {Form} from "../form/Form";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    }, [])

    return(
       <div>
           <div>
            <Form setUsers={setUsers}/>
           </div>

           <div>
               {
                   users.map(user => <User item={user} key={user.id}/>)
               }
           </div>
</div>
)
}