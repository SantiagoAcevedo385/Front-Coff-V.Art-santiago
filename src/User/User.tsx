import {Outlet} from 'react-router-dom'
import { UserMenu } from "../components/UserMenu/UserMenu"
import './User.css'

export const User = () => {
    return(
        <div className="User">
            <UserMenu />
            <div className="userContainer">
                <Outlet />
            </div>
        </div>
    )
}