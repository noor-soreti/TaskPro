import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Register from '../components/Register';


export default function CenterContent({ fComp }) {
    return (
        <>
            {/* <div>
                <h2 style={{ fontStyle: 'poppin, sans-serif', fontSize: '4em' }}>name.</h2>
            </div> */}
            <div className='border pt-5 pb-5 pe-4 ps-4 rounded' style={{ marginTop: '100px', backgroundColor: 'white', width: '75%' }}>
                {fComp}
            </div>


        </>
    )
}
