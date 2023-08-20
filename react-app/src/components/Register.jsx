import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase'

import CenterContent from '../boilerplate/CenterContent';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../boilerplate/Input';


function FormContainer() {


    const methods = useForm()
    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    })


    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: firstname,
                last: lastname,
                email: email,
                password: password
            });
            console.log(`${docRef.id} `);

        } catch (e) {
            console.log("catch");
        }
    }


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
                            placeholder="type your first name"
                            validation={{ required: { value: true, message: 'First name required' } }}
                        />
                        <Input
                            label="Last Name"
                            type="text"
                            id="lastname"
                            placeholder="type your last name"
                            validation={{ required: { value: true, message: 'Last name required' } }}
                        />
                        <Input
                            label="Email"
                            type="text"
                            id="email"
                            placeholder="type your email"
                            validation={{ required: { value: true, message: 'Email required' } }}
                        />
                        <Input
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="type your password"
                            validation={{ required: { value: true, message: 'Password required' } }}
                        />
                        <button onClick={onSubmit} style={{ width: '100%' }}>Register</button>
                    </div>
                </form>
            </FormProvider>
        </div>

        // <Form >
        //     <Form.Group className="mb-3" controlId="form.FirstName">
        //         {/* <Form.Label>First Name</Form.Label> */}
        //         <Form.Control type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="form.LastName">
        //         {/* <Form.Label>Last Name</Form.Label> */}
        //         <Form.Control type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         {/* <Form.Label>Email</Form.Label> */}
        //         <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         {/* <Form.Label>Password</Form.Label> */}
        //         <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //     </Form.Group>

        //     <Button variant="primary" type="submit" href='/' onClick={register}>
        //         Register
        //     </Button>{' '}

        //     <Button variant="danger" href='/'>Cancel</Button>{' '}


        // </ >

    );
}

export default function Register() {
    return (
        <div>
            <FormContainer />
        </div>
    )
}
