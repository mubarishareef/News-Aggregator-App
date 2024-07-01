'use client'
import React from 'react'
import Link from "next/link";  
import { useStateContext } from '../../context/stateContext';
 

// welcome page component           

const Welcome = () => {
    const {redirectToHomePage}=useStateContext()
    return (
        <section id="hero">
            <div className="hero-container" data-aos="fade-up">
                <h1>Welcome to Compass</h1>
                <h2>News on the go. Always stay informed.</h2>
                <Link href='/home'><div className='continue-btn' onClick={redirectToHomePage} >Home Page</div></Link>
            </div>
        </section>
    )
}

export default Welcome
