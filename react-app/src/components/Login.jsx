import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form'
import { signIn, user, signOut } from '../../authentication'
import { Input } from '../boilerplate/Input'
import { db } from '../../firebase'
import { useQuery, useMutation } from '@apollo/client';
import { TEST_QUERY } from '../apollo/queries'
import Reset from "./Reset.jsx";
import {Query} from "@apollo/client/react/components/index.js";

export default function Login({ setIsLoggedIn, setCurrentUser }) {
    const methods = useForm()
    const [loginInfo, setLoginInfo] = useState(false)
    const [errMessage, setErrMessage] = useState("")

    const { loading, error, data } = useQuery(TEST_QUERY)
    const onSubmit = methods.handleSubmit(async (e) => {

        // signOut()
        try {
            const signinUser = await signIn(e.email, e.password)
            console.log("Sign in user: ", signinUser);
        } catch (e) {
            console.log("err")
        }

        // try {
        //     const querySnapshot = await getDocs(collection(db, "users"));
        //     querySnapshot.forEach((doc) => {
        //         if (doc.data().email == e.email && doc.data().password == e.password) {
        //             console.log("YES");
        //             setIsLoggedIn(true)
        //         } else {
        //             console.log("no")
        //             setLoginInfo(true)
        //         }
        //     })
        // } catch (e) {
        //     setLoginInfo(true)
        //     setErrMessage("Whoops! Something went wrong")
        //     console.log("error")
        // }
    })
    return (
        <div className='content ' >
            <FormProvider {...methods} >
                <form onSubmit={e => e.preventDefault()} style={{ marginTop: '200px', backgroundColor: 'white', width: '50%', minWidth: '400px' }}>
                    <div className="mb-3 border rounded pt-4 pb-4 px-4">
                        <p style={{ textAlign: 'center' }}>Login</p>
                        <Input
                            label="Email"
                            type="email"
                            id="email"
                            placeholder="type your email..."
                            validation={{ required: { value: true, message: 'Email required' } }}
                        />
                        <Input
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="type your password..."
                            validation={{ required: { value: true, message: 'Password required' } }}
                        />
                        <button className='' onClick={onSubmit} style={{ width: '100%' }}>Submit</button>
                        {loginInfo && errorMessage(errMessage)}
                    </div>

                </form>
            </FormProvider>
            <div className='content'>
                <Link to="/register">Register</Link>
                <Link to="resetPassword">Forgot Password</Link>
            </div>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/resetPassword' element={<Reset />}/>
            </Routes>

        </div>

    );
}

