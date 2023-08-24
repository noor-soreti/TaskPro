import React, { useState } from 'react'
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import { doc, setDoc } from "firebase/firestore";

import { createUser } from '../../authentication'
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../boilerplate/Input';


export default function Register() {


    const methods = useForm()
    const onSubmit = methods.handleSubmit(async (e) => {
        createUser(e.email, e.password)
    })


    return (
        <div className='content'>
            <FormProvider {...methods}>
                <form onSubmit={e => e.preventDefault()} style={{ marginTop: '200px', backgroundColor: 'white', width: '50%', minWidth: '400px' }}>
                    <div className="mb-3 border rounded pt-4 pb-4 px-4">
                        <p style={{ textAlign: 'center' }}>Sign Up</p>
                        <Input
                            label="First Name"
                            type="text"
                            id="firstname"
                            placeholder="Type your first name"
                            validation={{ required: { value: true, message: 'First name required' } }}
                        />
                        <Input
                            label="Last Name"
                            type="text"
                            id="lastname"
                            placeholder="Type your last name"
                            validation={{ required: { value: true, message: 'Last name required' } }}
                        />
                        <Input
                            label="Email"
                            type="text"
                            id="email"
                            placeholder="Type your email"
                            validation={{ required: { value: true, message: 'Email required' } }}
                        />
                        <Input
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="Type your password"
                            validation={{ required: { value: true, message: 'Password required',  } }}
                        />
                        <button onClick={onSubmit} style={{ width: '100%' }}>Register</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}

// export default function Register() {
//     return (
//         <div>
//             <FormContainer />
//         </div>
//     )
// }
