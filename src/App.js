import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import classes from './App.module.css'
import LoginPage from './Pages/LoginPage'
import SignUp from './Pages/SignUp'
import {useDispatch} from 'react-redux'
import {fetchData} from './Store/login-actions'
import ResetPassword from './Pages/ResetPassword'
import HomePage from './components/HomePage'
import Header from './components/Header'

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData());
  },[dispatch])

  return (
    <Switch>

      <Route path='/' exact>
        <Redirect to='/login-page/' />
      </Route>

      <Route path='/login-page/'>
        <LoginPage/>
      </Route>

      <Route path='/Sign-up/'>
        <SignUp/>
      </Route>

      <Route path='/password/reset/'>
        <ResetPassword/>
      </Route>

      <Route path='/:username/'>
        <Header/>
        <HomePage/>
      </Route>

    </Switch>
  );
}

export default App;
