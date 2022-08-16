import classes from './UserPostList.module.css'
import like from '../../Images/love.png'
import comment from '../../Images/comment.png'
import share from '../../Images/share.png'
import save from '../../Images/save.png'
import smile from '../../Images/smile.png'
import { useState } from 'react'
import dots from '../../Images/dots.png'

const UserPostList = (props) =>{

    console.log(props);
    const [isPost, setIsPost] = useState(false);
    const [cmt, setCmt] = useState('');


    const postHandler = (event) =>{

        setCmt(event.target.value);

        if(event.target.value !== ''){
            if(isPost !== true){
                setIsPost(true);
            }
        }
        else{
            if(isPost !== false){
                setIsPost(false);
            }
        }
    }
    return(
        <div className={classes.form2}>

            <div className={classes.align_}>

            <div className={classes.align_}>
                <span className={classes.circle}></span>
                <span className={classes.username}>{props.username}</span>
            </div>

            <img src={dots} height='15px' width='15px' />
            </div>

            <img className={classes.img} src={props.url} />
            
            <div className={classes.icons}>

                <span>
                    <img src={like} height='22px' width='22px'/>
                    <img src={comment} height='22px' width='22px'/>
                    <img src={share} height='22px' width='22px'/>
                </span>

                <span className={classes.img2}>
                    <img src={save} height='22px' width='22px'/>
                </span>


            </div>
                <div className={classes.text} >{props.likes}&ensp;likes</div>

                <div className={classes.div}><span>{props.username} </span> {props.caption}</div>

                {props.comments.length === 1 ? 
                <div className={classes.comments}>View 1 comment</div> :
                <div className={classes.comments}>View all {props.comments.length} comments</div>}
                
                <div className={classes.smile}>

                        <img src={smile} height='22px' width='22px' />
                        <input className={classes.input} placeholder='Add a comment...' onChange={postHandler}></input>

                    <span className={!isPost ? classes.post : classes.post_}>Post</span>

                </div>
        </div>
    );
}

export default UserPostList;