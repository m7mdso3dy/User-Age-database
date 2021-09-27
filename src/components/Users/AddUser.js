/*.............
*/
import React, { useState}from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'
const AddUser = props => {
    const [user, setUser] = useState('');
    const [age, setAge] = useState('');
    const [err, setErr] = useState();
    ////////////////////
    ///////error okay handler
    const errOkayHandler = () => {
        setErr();
    }
    ///////////handling inputs
    const userHandler = eve => {
        setUser(eve.target.value)
    }
    const ageHandler = eve => {
        setAge(eve.target.value)
    }
    /////////when submitting
    const addUserHandler = eve => {
        eve.preventDefault();
        if (user.trim().length === 0 || age.trim().length === 0) {
            setErr({
                title: 'Invalid Input',
                msg:'Please Enter a valid Name and Age (non-empty-values)'
            })
            return;
        }
        if (+age < 1) {
            setErr({
                title: 'Invalid Age',
                msg:'Please Enter a valid Age (>0)'
            })
            return;
        }
        const userData = {
            id:Math.trunc(Math.random()*1000),
            userName: user,
            userAge:age
        }
        props.onAddUser(userData);
        setUser('');
        setAge('');
    }
    //////////////////
    return (
        <div>
            {err && <ErrorModal
                title={err.title}
                msg={err.msg}
                onOkay={errOkayHandler}
            ></ErrorModal>}
        <Card className={classes.input}>
         <form onSubmit={addUserHandler}>
                <label
                    htmlFor='username'
                >Username</label>
                <input
                    placeholder='Enter Your User Name'
                    id='username'
                    type='text'
                    value={user}
                    onChange={userHandler}

                />
                <label htmlFor='age'>Age (Years)</label>
                <input
                    placeholder='Enter Your Age In Years'
                    id='age'
                    type='number'
                    value={age}
                    onChange={ageHandler}
                />
                <Button
                    type='submit'
                >
                    Add User
                </Button>
        </form>
        </Card>
    </div>
    )
 }
export default AddUser