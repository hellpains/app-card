import React from 'react';
import './App.css';
import {HashRouter,  Route, Routes} from "react-router-dom";
import {Login} from "../features/Login/Login";
import {Registration} from "../features/Registration/Registration";
import {Profile} from "../features/Profile/Profile";
import {Nav} from "../features/Nav/Nav";
import {NotFound} from "../features/NotFound/NotFound";
import {RecoveryPassword} from "../features/RecoveryPassword/RecoveryPassword";
import {Example} from "../features/Example/Example";
import {EnterNewPassword} from "../features/EnterNewPassword/EnterNewPassword";

export enum PATH {
    LOGIN = '/login',
    REGISTRATION = '/registration',
    PROFILE = '/profile',
    NEW_PASSWORD = '/new_password',
    RECOVERY = '/recovery_password',
    EXAMPLE = '/example',
    NOT_FOUND = '/not_found',
}


const App = () => (
    <div className="App">
        <HashRouter>
            <Nav/>
            <Routes>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.NOT_FOUND} element={<NotFound/>}/>
                <Route path={PATH.RECOVERY} element={<RecoveryPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<EnterNewPassword/>}/>
                <Route path={PATH.EXAMPLE} element={<Example/>}/>
            </Routes>

        </HashRouter>
    </div>
);

export default App;
