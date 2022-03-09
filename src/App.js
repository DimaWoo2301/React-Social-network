import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";


const App = (props) => {
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='wrapper_hero'>
          <Navbar state={props.store}/>
          <Route path='/profile' render={ () => <Profile />}/>
          <Route path='/messages' render={ () => <DialogsContainer />}/>
          <Route path='/news' render={ () => <News/>}/>
          <Route path='/music' render={ () => <Music/>}/>
          <Route path='/settings' render={ () => <Settings/>}/>
        </div>
      </div>
    </>
  );
}

export default App;