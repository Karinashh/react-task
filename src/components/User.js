export default function User(props) {
    const {user, lift} = props
    return (
        <div className="user">
            <h3>{user.id} - {user.username}</h3>
            <button onClick={() => {
                lift(user);
            }}>details</button>
        </div>
    )
}