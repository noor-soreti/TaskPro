import { useState } from 'react'
import Login from './Login'
import { user } from '../../authentication'
import { GET_CURRENT_USER, LOGIN} from "../apollo/queries.jsx";
import {useQuery} from "@apollo/client";

export default function Wrapper() {
    const { loading, error, data } = useQuery(LOGIN)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(user)
    console.log("CURRENT USER: ", GET_CURRENT_USER)


    if (!isLoggedIn) {
        return (
            <>
                <Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />
            </>
        )
    } else {
        return (
            <div>Home</div>
        )
    }
}
