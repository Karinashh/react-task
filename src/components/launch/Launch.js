export default function Launch(props) {
    let {launch} = props;
    return (
        <div>
            <h2>{launch.mission_name}</h2>
            <h5>{launch.launch_year}</h5>
            <img src={launch.links.mission_patch_small} alt={launch.mission_name}/>
        </div>
    )
}