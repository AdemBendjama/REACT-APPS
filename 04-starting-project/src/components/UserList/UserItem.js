function UserItem(props) {
    return (
        <>
            <li>{`${props.item.Name} ( ${props.item.Age} years old)`}</li>
        </>
    )
}

export default UserItem;