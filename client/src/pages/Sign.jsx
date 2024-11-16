import React from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import './Sign.css'

const Sign = (props) => {
    const navigate = useNavigate()
    const {register, handleSubmit, setError, formState: {errors}} = useForm()
    const onSubmit = async (data) => {
        try {
            const url = (props.isSignInPage) ?  "http://localhost:3000/auth/signin" : "http://localhost:3000/auth/signup"
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (result.success) {
                if (props.isSignInPage) {
                    console.log("User logged in successfully")
                    localStorage.setItem("userEmail", result["email"])
                    localStorage.setItem("userToken", result["jwtToken"])
                    setTimeout(() => {
                        navigate("/feed")
                    }, 1000)
                } else {
                    console.log("User created successfully")
                    setTimeout(() => {
                        navigate("/signin")
                    }, 1000)
                }
            } else {
                setError("credentials", {
                    type: "manual",
                    message: result.message,
                })
            }
        } catch (error) {
            setError("credentials", {
                type: "manual",
                message: "An error occurred, please try again later",
            })
        }
    }

    return (
        <div className="section">
            <h1 className="heading">{props.isSignInPage ?  "Sign in" : "Sign up"}</h1>
            <div className="credentials-form-container">
                <form className="credentials-form-box" onSubmit={handleSubmit(onSubmit)}>
                    <div className="credential-container">
                        <div className="credential-label">
                            <label className="credential-label-data"  htmlFor="email">Email address</label>
                        </div>
                        <input className="credential-input" type="email" {...register("email", {required: {value: true, message: "Required field"}})} />
                        {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>
                    <div className="credential-container">
                        <div className="credential-label">
                            <label className="credential-label-data" htmlFor="password">Password</label>
                            {props.isSignInPage && <a className="credentials-link" href="/">Forgot password?</a>}
                        </div>
                        <input className="credential-input" type="password" {...register("password", {required: {value: true, message: "Required field"},  minLength: {value: 8, message: "Password must be at-least 8 characters long"}})} />
                        {errors.password && <p className="form-error">{errors.password.message}</p>}
                    </div>
                    <div className="credentials-button-container">
                        <button className="credential-button" type="submit">{props.isSignInPage ?  "Sign in" : "Sign up"}</button>
                    </div>
                    <div>
                        {errors.credentials && <p className="server-error">{errors.credentials.message}</p>}
                    </div>
                </form>
            </div>
            <div className="alternative-sign">
                <div className="instructions">{props.isSignInPage ? "New to uniData?" : "Already have an account?"}</div>
                <Link className="credentials-link" to={props.isSignInPage ? "/signup" : "/signin"}>{props.isSignInPage ? "Create an account" : "Sign in"}</Link>
            </div>
            <div className="more-links">
                <a className="credentials-link" href="/">Terms & Conditions</a>
                <a className="credentials-link" href="/">Privacy & Support</a>
            </div>
        </div>
    )
}

export default Sign
