import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {accounts:[],}
const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers:{

        getData(state, actions){
            state.accounts =actions.payload
        },

        postData(state,action){
                fetch('https://instagram-1abd6-default-rtdb.firebaseio.com/instagram/accounts',{
                    method: 'POST',
                    body: JSON.stringify(action.payload)
                })

        }
    }
})

export const loginActions = loginSlice.actions;

export default loginSlice;