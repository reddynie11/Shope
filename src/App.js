import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInSignUp from './pages/signin+signup/signin+signup.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

//actions
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id : snapShot.id,
            ...snapShot.data()
          })
        })
      }else{
          setCurrentUser(userAuth)
      }
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=> {
  return ({
    setCurrentUser: (user)=> { dispatch(setCurrentUser(user)) }
  })
}

export default connect(null,mapDispatchToProps )(App);
