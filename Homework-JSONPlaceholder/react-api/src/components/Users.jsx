import React from 'react';

const Users = (props) => {
    console.log(props)
    let data = props.data

    return (
        <div>
            <h1>Users List:</h1>
        { data.map((user, index) => (
            <div className='user-name' key= {index}>Name: {user.name}</div>
        ) ) }
            
        </div>
    )
}

export default Users;