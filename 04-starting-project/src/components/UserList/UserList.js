import UserItem from "./UserItem";

function UserList(props) {

    const list = props.userList.map(
        (item, index) => <UserItem key={index} item={item}></UserItem>
    )

    return (
        <div className='user-list'>
            <ol>
                {list}
            </ol>
        </div>
    )
}

export default UserList;