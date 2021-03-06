import classes from './UsersList.module.css';
import React from 'react';
import Card from '../UI/Card';
const UsersList = props => {
    return (
        <Card className={classes.users}>
        
            
            <ul>
            {props.users.map(user => {
                return (
            
                    <li
                        key={user.id}
                        
                    >
                        {user.userName}  ({user.userAge} Years Old)
                    </li>
            
                )
            })}
            </ul> 
        </Card>
    )
}
export default UsersList