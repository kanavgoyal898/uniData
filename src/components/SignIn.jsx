import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import './Credentials.css'

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            const result = await response.json()
            if (response.ok) {
                console.log("Login successful:", result)
                navigate("/dashboard")
            } else {
                console.error("Login failed:", result.error)
                alert(result.error)
            }
        } catch (error) {
            console.error("Error during login:", error)
        }
    }

    return (
        <div className="credentials">
            <div className="heading">
                Sign in to uniData
            </div>
            <div className="mt-8 form-container">
                <form action="/" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <div className="label-container">
                    <label className="label-credentials" htmlFor="email">Email Address</label>
                    </div>
                    <input className="credentials-input" type="email" name="email" {...register("email")} />
                </div>
                <div className="field">
                    <div className="label-container">
                    <label className="label-credentials" htmlFor="password">Password</label>
                    <a href="/">Forgot password?</a>
                    </div>
                    <input className="credentials-input" type="password" name="password" {...register("password")} />
                </div>
                <div className="button-field">
                    <div>
                    <button className="button-filled" type="submit">Login</button>
                    </div>
                </div>
                </form>
            </div>

            <div className="mt-8 form-container">
                <div className="field">
                <div>
                    New to uniData?
                </div>
                <Link to="/register">Create an account</Link>
                </div>
            </div>
            <div className="mt-8 px-4 w-[360px]">
                <ul className="label-container">
                <li><a className="hidden-link" href="/">Terms & Conditions</a></li>
                <li><a className="hidden-link" href="/">Privacy & Support</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SignIn
