import classes from './ResetPassword.module.css'
import lock from '../Images/lock.png'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ResetPassword = () =>{
    
    const history = useHistory();
    
    const [userName, setUserName] = useState('');
    const [userNameLabel, setUserNameLabel] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const userNameHandler = (event) =>{

        setUserName(event.target.value)

            if(event.target.value !== ''){
                setUserNameLabel(true);
            }
            else{
                if(userNameLabel !== false){
                    setUserNameLabel(false);
                }
            }
            if(event.target.value !== ''){
                setIsValid(true);
            }
            else{
                setIsValid(false);
            }
    }

    const submitHandler = (event) =>{
        event.preventDefault();

    }

    return (
    <div className={classes.align}>
        <div className={classes.block}>
            <div className={classes.card}>

                <div className={classes.div}>
                    <img src={lock} height='100px' width='100px'/>
                </div>

                <div className={classes.div}>
                    <div className={classes.normal}>Trouble Logging In?</div>
                </div>

                <div className={classes.div}>
                    <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                </div>

                <input className={userNameLabel ? classes.input_ :classes.input} placeholder={'Phone number, username, email'} onChange={userNameHandler} />
                {userNameLabel && <div className={classes.insert}>Phone number, username, email</div>}

                {isValid && <button className={classes.button} onClick={submitHandler}>Log In</button>}
                {!isValid && <button className={classes.button_} disabled >Send Login Link</button>}

                <div className={classes.text}>
                    <div>OR</div>
                </div>

                <div className={classes.div}>
                    <div className={classes.create} onClick={()=>{history.push('/Sign-up/')}}>Create New Account</div>
                </div>

                <div >
                    <div className={classes.card1} onClick={()=>{history.push('/login-page/')}}>Back To Login</div>
                </div>
            </div>
        </div>
    </div>);
}

export default ResetPassword;