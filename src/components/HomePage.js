import { useParams } from 'react-router-dom';
import classes from './HomePage.module.css'
import { useSelector } from 'react-redux';
import Post from './Post/Post'

const HomePage = ()=>{
    
    const data = useSelector(state => state.login.accounts)
    const param = useParams();

    if(data.length === 0){
        return
    }

    const userData = data.filter((data) => data.username === param.username)
    console.log(userData)
    return(
        <div className={classes.align}>
            
            <div className={classes.block}>

                <div className={classes.form1}>

                </div>

                <div>
                    
                    <Post data={data} userData={userData}/>
                </div>

            </div>

            <div className={classes.form3}>

                <div className={classes.align_}>

                    <div className={classes.alignC}>
                        <div className={classes.circle}></div>
                            <div>
                                <div className={classes.username}>{userData[0].username}</div>
                                <div className={classes.name}>{userData[0].name}</div>
                            </div>
                    </div>

                    <div className={classes.switch}>Switch</div>
                </div>

                <div className={classes.align_}>
                    <div className={classes.suggestion}>Suggestions For You</div>
                    <div className={classes.see}>See All</div>
                </div>

            </div>

        </div>
    );
}

export default HomePage;