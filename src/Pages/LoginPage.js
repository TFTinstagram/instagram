import { Fragment, useEffect, useState } from 'react'
import classes from './LoginPage.module.css'
import facebook from '../Images/facebook.png'
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

const LoginPage = () =>{

    const accounts = useSelector(state=>state.login.accounts);
    const history = useHistory();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [userNameLabel, setUserNameLabel] = useState(false);
    const [passwordLabel, setPasswordLabel] = useState(false);


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
            if(event.target.value !== '' && password.length >6){
                setIsValid(true);
            }
            else{
                setIsValid(false);
            }
    }

    const passwordHandler = (event) =>{

        setPassword(event.target.value);
        if(event.target.value !== ''){
            setPasswordLabel(true);
        }
        else{
            if(passwordLabel !== false){
                setPasswordLabel(false);
            }
        }

            if(userName !== '' && event.target.value.length >= 6){
                setIsValid(true);
            }
            else{
                setIsValid(false);
            }
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const granted = accounts.filter(account => account.username === userName && account.password === password);
        
        if(granted.length === 0){
            console.log('invalid password');
        }
        else{
            history.push(`/${granted[0].username}/`)
        }

    }

    return(
        <div className={classes.align}>
            
            <div className={classes.card}>
                <img className={classes.instaImg1} src='https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png' />
                <img className={classes.instaImg2} src='https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png' />
                <img className={classes.instaImg3} src='https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png' />
                <img className={classes.instaImg4} src='https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png' />
            </div>

            <div className={classes.block}>
                <div className={classes.form}>
                    <div className={classes.insta}>
                    <img className={classes.instaText} src='https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png' />
                    </div>

                    <input className={userNameLabel ? classes.input_ :classes.input} placeholder={'Phone number, username, email'} onChange={userNameHandler} />
                    {userNameLabel && <div className={classes.insert}>Phone number, username, email</div>}
                    
                    <input className={passwordLabel ? classes.input_ :classes.input} type='password' placeholder={'Password'} onChange={passwordHandler}/>
                    {passwordLabel && <div className={classes.insert}>Password</div>}
                
                    {isValid && <button className={classes.button} onClick={submitHandler}>Log In</button>}
                    {!isValid && <button className={classes.button_} disabled >Log In</button>}
                    
                    <div className={classes.text}>
                        <div>OR</div>
                    </div>
                    
                    <div className={classes.facebook}>
                        <img src={facebook} height='25px' width='25px' />
                        <span>Log in with Facebook</span>
                    </div>
                    <div className={classes.forgot}>
                        <div onClick={()=>{history.push('/password/reset/')}}>Forgot password?</div>
                    </div>
                    
                </div>

                <div>
                    <div className={classes.signup}>
                        Don't have an account? <span onClick={()=>{history.push('/sign-up/')}}>&ensp;Sign up</span>
                    </div>
                </div>

                <div className={classes.get}>
                    <p>Get the app.</p>
                </div>

                <div>
                    <div className={classes.app}>
                    <a href='https://apps.apple.com/app/instagram/id389801252?vt=lo' target='_blank'> <img src={'https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png'} /> </a>
                    <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DF8D0AC21-CEB0-4BC0-8E7F-4D32B47B58CA%26utm_content%3Dlo%26utm_medium%3Dbadge' target='_blank'> <img src={'https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png'} /> </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;