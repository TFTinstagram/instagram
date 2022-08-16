import { loginActions } from "./Store-login";

export const fetchData = () =>{
    return async (dispatch)=>{

        const sendRequet = async ()=>{
            const response = await fetch('https://instagram-1abd6-default-rtdb.firebaseio.com/instagram/accounts.json');

                if(!response.ok){
                    throw new Error('something is wrong')
                }
                const responseData = await response.json();

                let act = []
                for(const key in responseData){
                    act.push({
                        id:key,
                        username:responseData[key].username,
                        password:responseData[key].password,
                        email:responseData[key].email,
                        name:responseData[key].name,
                        post:responseData[key].post,
                        following:responseData[key].following,
                    })
                }
                return act;
        }

        try{
            const data = await sendRequet();
            dispatch(loginActions.getData(data))
        }
        catch(error){
            console.log(error);
        }
    }
}