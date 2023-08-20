import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import React, { useState } from 'react';
import { collection, addDoc, getDoc, getDocs, doc, where } from "firebase/firestore";
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { db } from '../../firebase'
import { Input } from '../boilerplate/Input'



// function FormContainer() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [validated, setValidated] = useState(false);

//     const submit = async (e) => {
//         e.preventDefault();
//         try {
//             console.log(email);
//             const q = query(collection(db, "users"), where("email", "==", email));
//             const querySnapshot = await getDocs(q);
//             querySnapshot.forEach((doc) => {
//                 console.log(doc.id, " => ", doc.data());
//             })
//         } catch (e) {
//             console.log("eek");
//         }
//     }



export default function Login() {

    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    })
    console.log(methods);



    return (
        <div className='content ' >
            <FormProvider {...methods} >
                <form onSubmit={e => e.preventDefault()} className='   ' style={{ marginTop: '200px', backgroundColor: 'white', width: '50%', minWidth: '400px' }}>

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

        // <div className='content'>
        //     <div>
        //         <h2 style={{ fontStyle: 'poppin, sans-serif', fontSize: '4em' }}>name.</h2>
        //     </div>
        //     <div className='border pt-5 pb-5 pe-4 ps-4 rounded' style={{ marginTop: '100px', backgroundColor: 'white', width: '75%' }}>
        //         <FormContainer />
        //     </div>
        // <div className='d-grid '>
        //     <Link to="/register">Register</Link>
        //     <Link to="forgot-password">Forgot Password</Link>
        // </div>
        // <Routes>
        //     <Route path='/register' element={<Register />} />
        // </Routes>
        // </div>

    );
}

