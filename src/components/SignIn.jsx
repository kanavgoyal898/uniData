import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import './Credentials.css'

const SignIn = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, setError, formState: { errors } } = useForm()
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
                sessionStorage.setItem('token', result.token);
                sessionStorage.setItem('user', result.email);
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
                Sign in to uniData
            </div>
            <div className="mt-[32px] form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <div className="label-container">
                            <label className="label-credentials" htmlFor="email">Email address</label>
                        </div>
                        <input className="credentials-input" type="text" name="email" {...register("email", {required: true})} />
                    </div>
                    <div className="field">
                        <div className="label-container">
                            <label className="label-credentials" htmlFor="password">Password</label>
                            <Link to="/">Forgot password?</Link>
                        </div>
                        <input className="credentials-input" type="password" name="password" {...register("password", {required: true})} />
                    </div>
                    <div className="button-field">
                        <button className="button-filled" type="submit">Login</button>
                    </div>
                </form>
            </div>
            { errors.connection && <p className="error-message">{errors.connection.message}</p> }
            { errors.credentials && <p className="error-message">{errors.credentials.message}</p> }
            <div className="mt-[32px] form-container">
                <div className="field">
                    <div>
                        New to uniData?
                    </div>
                    <Link to="/register">Create an account</Link>
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

export default SignIn
