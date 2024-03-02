function UserList(props) {

    const listData = props.listData

    return (
        <ul>
            <li>Adam (21 years old )</li>
            <li>James (39 years old )</li>
            {listData.map((row, index) => (
                <li key={index} >{row.username} ({row.age} years old )</li>
            ))}
        </ul>
    )
}

export default UserList;