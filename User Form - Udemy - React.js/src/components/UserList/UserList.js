function UserList(props) {

    const listData = props.listData

    return (
        <ul>
            {listData.map((row, index) => (
                <li key={index} >{row.username} ({row.age} years old )</li>
            ))}
        </ul>
    )
}

export default UserList;