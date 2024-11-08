import React from 'react'
import { useForm } from 'react-hook-form'
import './Sign.css'

const SignUp = () => {
    const {register, handleSubmit, setError, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="section">
            <h1 className="heading">Sign up</h1>
            <div className="credentials-form-container">
                <form className="credentials-form-box" onSubmit={handleSubmit(onSubmit)}>
                    <div className="credential-container">
                        <div className="credential-label">
                            <label className="credential-label-data" htmlFor="email">Email address</label>
                        </div>
                        <input className="credential-input" type="email" {...register("email", {required: {value: true, message: "Required field"}})} />
                        {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>
                    <div className="credential-container">
                        <div className="credential-label">
                            <label className="credential-label-data" htmlFor="password">Password</label>
                        </div>
                        <input className="credential-input" type="password" {...register("password", {required: {value: true, message: "Required field"}, minLength: {value: 8, message: "Password must be at-least 8 characters long"}})} />
                        {errors.password && <p className="form-error">{errors.password.message}</p>}
                    </div>
                    <div className="credentials-button-container">
                        <button className="credential-button" type="submit">Sign up</button>
                    </div>
                    <div>
                        {errors.credentials && <p className="form-error">{errors.credentials.message}</p>}
                    </div>
                </form>
            </div>
            <div className="alternative-sign">
                <div className="instructions">Already have an account?</div>
                <a className="credentials-link" href="/">Sign In</a>
            </div>
            <div className="more-links">
                <a className="credentials-link" href="/">Terms & Conditions</a>
                <a className="credentials-link" href="/">Privacy & Support</a>
            </div>
        </div>
    )
}

export default SignUp
