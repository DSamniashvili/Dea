import React from 'react';
import Icons from '../OtherComponents/Icons'


const Login = () => {
    return (
        <div className="login">
            <h3>log in</h3>
            <div className="user-wrapper">
                <div className="icon_user">
                    <Icons className={'user'} />
                </div>
            </div>
        </div>
    )
}


export default Login