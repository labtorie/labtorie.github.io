import React from 'react'
import styles from './Content.module.css'
import {Route} from "react-router-dom";
import Profile from "./profile/Profile";
import Messages from "./Messages/Messages";

const ContentWrapper = (props) => {
    return (
        <div className={styles.contentWrapper}>
            <Route path='/profile' render={() => <Profile
                state={props.state.profilePage.userInfo}/>}/>
            <Route path='/messages' render={() => <Messages
                state={props.state.messagesPage}
                funcs={props.funcs.messagesPage}/>}/>

        </div>
    )
}

export default ContentWrapper