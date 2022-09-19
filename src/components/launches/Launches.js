import {useState} from "react";
import Launch from "../launch/Launch";

export default function Launches() {
    let[launches, setLaunches] = useState([]);

    fetch('https://api.spacexdata.com/v3/launches')
        .then (value => value.json())
        .then (value => {
            setLaunches(value);
        });


    return (
        <div>
            {launches.filter(value => value.launch_year !== '2020').map((launch, index) => (<Launch launch={launch} key={index}/>))}
        </div>
    )
}