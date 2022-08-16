import UserPostList from "./UserPostList";

const UserPost = (props) =>{

    const user = props.data.filter(data => data.username === props.username)
    
    if(user.length === 0){
        return
    }

    
    const userPost = user[0].post.map(post => <UserPostList comments={post.comments} likes={post.likes} url={post.url} caption={post.caption} username={props.username} />) 
    return (
        <div>
            {userPost}
        </div>
    );
}

export default UserPost