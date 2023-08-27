import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import React, { useState } from 'react';
import { collection, addDoc, getDoc, getDocs, where } from "firebase/firestore";
import { FormProvider, useForm } from 'react-hook-form'
import { signIn, user, signOut } from '../../authentication'
import { Input } from '../boilerplate/Input'
import { db } from '../../firebase'

export default function Login({ setIsLoggedIn }) {
    const methods = useForm()
    const [loginInfo, setLoginInfo] = useState(false)

    // const onSubmit = methods.handleSubmit(data => {
    //     console.log(data)
    // })

    const onSubmit = methods.handleSubmit(async (e) => {

        console.log(db);
        // signOut()
        // const signinUser = await signIn(e.email, e.password)
        // console.log(signinUser);


        // try {
        //     const querySnapshot = await getDocs(collection(db, "users"));
        //     querySnapshot.forEach((doc) => {
        //         if (doc.data().email == e.email && doc.data().password == e.password) {
        //             console.log("YES");
        //             setIsLoggedIn(true)
        //         } else {
        //             setLoginInfo(true)
        //         }
        //     })
        // } catch (e) {
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
                        {loginInfo && (<p>Whoops! Something went wrong</p>)}
                    </div>

                </form>
            </FormProvider>
            <div className='content'>
                <Link to="/register">Register</Link>
                <Link to="forgot-password">Forgot Password</Link>
            </div>
            <Routes>
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>

    );
}

