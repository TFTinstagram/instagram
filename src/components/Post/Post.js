import classes from './Post.module.css'
import UserPost from './UserPost'


const Post = (props) =>{

    const following = props.userData[0].following.map((data) => <UserPost username={data.username} data={props.data} />)
    return(
        <div>
                {following}

        </div>
    );
}

export default Post