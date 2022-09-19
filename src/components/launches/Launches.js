import {useEffect, useState} from "react";
import Launch from "../launch/Launch";
import getLaunches from "../../services/api.launches.axios";

export default function Launches() {
    let[launches, setLaunches] = useState([]);


useEffect(() => {
    getLaunches().then(value => setLaunches(value.data))
}, [])
    return (
        <div>
            {launches.filter(value => value.launch_year !== '2020').map((launch, index) => (<Launch launch={launch} key={index}/>))}
        </div>
    )
}