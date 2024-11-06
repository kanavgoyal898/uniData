import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import './Credentials.css'

const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()
            if (response.ok) {
                console.log("Sign-up successful:", result)
                navigate("/dashboard")
            } else {
                console.error("Sign-up failed:", result.error)
                alert(result.error)
            }
        } catch (error) {
            console.error("Error during sign-up:", error)
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
                    <input className="credentials-input" type="text" name="email" {...register("email", {required: true, pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"}})} />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>
                <div className="field">
                    <div className="label-container">
                    <label className="label-credentials" htmlFor="password">Password</label>
                    </div>
                    <input className="credentials-input" type="password" name="password" {...register("password", {required: "Password is required", minLength: {value: 8, message: "Password must be at least 8 characters"}})} />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>

                <div className="button-field">
                    <div>
                    <button className="button-filled" type="submit">Sign up</button>
                    </div>
                </div>
                </form>
            </div>
            <div className="mt-8 form-container">
                <div className="field">
                <div>
                   Already have an account?
                </div>
                <Link to="/">Sign In</Link>
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

export default SignUp
