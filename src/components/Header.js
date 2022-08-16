import classes from './Header.module.css'
import { useState } from 'react'
import  home  from '../Images/home.png'
import homeclick from '../Images/homeclick.png'
import message from '../Images/message.png'
import add from '../Images/add.png'
import addclick from '../Images/addclick.png'
import explore from '../Images/compass.png'
import exploreclick from '../Images/compassclick.png'
import like from '../Images/love.png'
import likeclick from '../Images/loveclick.png'
import profile from '../Images/profile.jfif'
import clear from '../Images/cross.png'

const Header = () =>{

    const [search, setSearch] = useState('')

    const [homeClick, setHomeClick] = useState(false);
    const [messageClick, setMessageClick] =  useState(false);
    const [addClick, setAddClick] = useState(false);
    const [exploreClick, setExploreClick] = useState(false);
    const [likeClick, setLikeClick] = useState(false)
    const [cross, setCross] = useState(false)

    const searchHandler = (event) =>{
        setSearch(event.target.value)

        if(event.target.value !== ''){
            if(cross !== true){
                setCross(true)
            }
        }
        else{
            if(cross !== false){
                setCross(false)
            }
        }


    }

    return(
        <div className={classes.header}>
            <img className={classes.instaText} src='https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png' />

            <form className={classes.form}>
            <input className={classes.input}  placeholder={'Search'} value={search} onChange={searchHandler}/>
            {cross && <img className={classes.clear} src={clear} onClick={()=>{setCross(false); setSearch('')}} />}
            </form>

            <div className={classes.headericons}>
                { <img src={home} onClick={()=>{setHomeClick(true)}} height='22px' width='22px' />}
                {/* {homeClick && <img src={homeclick} onClick={()=>{setHomeClick(false)}} height='25px' width='25px' />} */}

                <img src={message} height='22px' width='22px'/>

                {!addClick && <img src={add} onClick={()=>{setAddClick(true)}}  height='22px' width='22px'/>}
                {addClick && <img src={addclick} onClick={()=>{setAddClick(false)}}  height='22px' width='22px'/>}

                {!exploreClick && <img src={explore} onClick={()=>{setExploreClick(true)}}  height='22px' width='22px'/>}
                {exploreClick && <img src={exploreclick} onClick={()=>{setExploreClick(false)}}  height='22px' width='22px'/>}
                
                {!likeClick && <img src={like} onClick={()=>{setLikeClick(true)}}  height='22px' width='22px'/>}
                {likeClick && <img src={likeclick} onClick={()=>{setLikeClick(false)}}  height='22px' width='22px'/>}
                
                <img className={classes.profile} src={profile} />
       
              
            </div>
        </div>
    );
}

export default Header;