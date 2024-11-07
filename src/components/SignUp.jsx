import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import './Credentials.css'

const SignUp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, setError, formState: { errors } } = useForm()
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
                setError("credentials", { message: result.error })
            }
        } catch (error) {
            setError("connection", { message: "Connection failed" })
        }
    }

    return (
        <div className="credentials">
            <div className="heading">
                Sign up to uniData
            </div>
            <div className="mt-[32px] form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <div className="label-container">
                            <label className="label-credentials" htmlFor="email">Email address</label>
                        </div>
                        <input className="credentials-input" type="text" name="email" {...register("email", {required: true, pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"}})} />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                    <div className="field">
                        <div className="label-container">
                            <label className="label-credentials" htmlFor="password">Password</label>
                        </div>
                        <input className="credentials-input" type="password" name="password" {...register("password", {required: true, minLength: {value: 8, message: "Password must be at least 8 characters long"}})} />
                    </div>
                    <div className="button-field">
                        <button className="button-filled" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
            { errors.connection && <p className="error-message">{errors.connection.message}</p> }
            { errors.credentials && <p className="error-message">{errors.credentials.message}</p> }
            <div className="mt-[32px] form-container">
                <div className="field">
                    <div>
                        Already have an account?
                    </div>
                    <Link to="/login">Sign In</Link>
                </div>
            </div>
            <div className="mt-[32px] w-[240px] sm:w-[360px]">
                <ul className="label-container">
                    <li><Link to="/tc">Terms & Conditions</Link></li>
                    <li><Link to="/ps">Privacy & Support</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default SignUp
