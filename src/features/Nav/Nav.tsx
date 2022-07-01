import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Nav.module.css'

export function Nav() {
    const activeClassName = (params: any) => params.isActive ? s.active : '';

    return (
        <div>
            <div>
                <NavLink to={'/login'} className={activeClassName}>
                    <div>
                        login
                    </div>
                </NavLink>
                <NavLink to={'/registration'} className={activeClassName}>
                    <div>
                        registration
                    </div>
                </NavLink>
                <NavLink to={'/profile'} className={activeClassName}>
                    <div>
                        profile
                    </div>
                </NavLink>
                <NavLink to={'/not_found'} className={activeClassName}>
                    <div>
                        Not Found
                    </div>
                </NavLink>
                <NavLink to={'/recovery_password'} className={activeClassName}>
                    <div>
                        recovery password
                    </div>
                </NavLink>
                <NavLink to={'/new_password'} className={activeClassName}>
                    <div>
                        Enter new password
                    </div>
                </NavLink>
                <NavLink to={'/example'} className={activeClassName}>
                    <div>
                        Example
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
