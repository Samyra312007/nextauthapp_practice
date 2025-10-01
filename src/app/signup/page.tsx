"use client";

import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {axios} from "axios";


export default function SignUpPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <br />
            <label htmlFor="username">username</label>
            <input id = "username" 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text" 
            value = {user.username}
            onChange = {(e) => setUser({...user, username: e.target.value})}
            placeholder="username"/>
            <label htmlFor="email">email</label>
            <input id = "email" 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text" 
            value = {user.email}
            onChange = {(e) => setUser({...user, email: e.target.value})}
            placeholder="email"/>
            <label htmlFor="password">password</label>
            <input id = "password" 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            type="text" 
            value = {user.password}
            onChange = {(e) => setUser({...user, password: e.target.value})}
            placeholder="password"/>
            <button 
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">SignUp here</button>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}