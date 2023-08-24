import React, { useState } from 'react'
import Login from './Login'
import { signIn, user } from '../../authentication'


export default function Wrapper() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(user)

    // console.log(currentUser);

    if (!isLoggedIn) {
        return (
            <>
                <Login setIsLoggedIn={setIsLoggedIn} />
            </>
        )
    } else {
        return (
            <div>Home</div>
        )
    }
}
