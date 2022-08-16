import classes from './SignUp.module.css'
import facebookWhite from '../Images/facebookWhite.png'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () =>{

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [emailLabel, setEmailLabel] = useState(false);

    const [name, setName] = useState('');
    const [nameLabel, setNameLabel] = useState(false);

    const [username, setUsername] = useState('');
    const [usernameLabel, setUsernameLabel] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordLabel, setPasswordLabel] = useState(false);


    const emailHandler = (event) =>{
        setEmail(event.target.value)

        if(event.target.value !== ''){
            setEmailLabel(true);
        }
        else{
            if(emailLabel !== false){
                setEmailLabel(false);
            }
        }
    }

    const nameHandler = (event) =>{
        setName(event.target.value)

        if(event.target.value !== ''){
            setNameLabel(true);
        }
        else{
            if(nameLabel !== false){
                setNameLabel(false);
            }
        }
    }

    const usernameHandler = (event) =>{
        setUsername(event.target.value)

        if(event.target.value !== ''){
            setUsernameLabel(true);
        }
        else{
            if(usernameLabel !== false){
                setUsernameLabel(false);
            }
        }
    }

    const passwordHandler = (event) =>{
        setPassword(event.target.value)

        if(event.target.value !== ''){
            setPasswordLabel(true);
        }
        else{
            if(passwordLabel !== false){
                setPasswordLabel(false);
            }
        }
    }

    const submitHandler =()=>{

    }

    return(
        <div className={classes.align}>
            <div className={classes.block}>
            <div className={classes.form}>

                <div className={classes.insta}>
                    <img className={classes.instaText} src='https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png' />
                </div>

                <div className={classes.p}>Sign up to see photos and videos from your friends.</div>

                <button className={classes.button}><img src={facebookWhite} height='20px' width='20px'/><span>&ensp;Log in with Facebook</span></button>

                <div className={classes.text}>
                    <div>OR</div>
                </div>

                <input className={emailLabel ? classes.input_ :classes.input} placeholder={'Mobile Number or Email'} onChange={emailHandler} />
                {emailLabel && <div className={classes.insert}>Mobile Number or Email</div>}

                <input className={nameLabel ? classes.input_ :classes.input} placeholder={'Full Name'} onChange={nameHandler} />
                {nameLabel && <div className={classes.insert}>Full Name</div>}

                <input className={usernameLabel ? classes.input_ :classes.input} placeholder={'Username'} onChange={usernameHandler} />
                {usernameLabel && <div className={classes.insert}>Username</div>}

                <input className={passwordLabel ? classes.input_ :classes.input} placeholder={'Password'} onChange={passwordHandler}/>
                {passwordLabel && <div className={classes.insert}>Password</div>}

                <div className={classes.div}>People who use our service may have uploaded your contact information to Instagram. Learn More</div>

                <div className={classes.div}>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</div>

                <button className={classes.btn} onClick={submitHandler}>Log In</button>
            </div>

            <div>
                <div className={classes.form1}>Have an account?<span onClick={()=>{history.push('/login-page/')}}>&ensp;Log in</span></div>
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

export default SignUp;