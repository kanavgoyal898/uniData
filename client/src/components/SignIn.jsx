import React from 'react'
import { useForm } from 'react-hook-form'
import './Sign.css'

const SignIn = () => {
    const {register, handleSubmit, setError, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="section">
            <h1 className="heading">Sign in</h1>
            <div className="credentials-form-container">
                <form className="credentials-form-box" onSubmit={handleSubmit(onSubmit)}>
                    <div className="credential-container">
                        <div className="credential-label">
                            <label htmlFor="email">Email address</label>
                        </div>
                        <input className="credential-input" type="email" {...register("email", {required: {value: true, message: "Required field"}})} />
                        {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>
                    <div className="credential-container">
                        <div className="credential-label">
                            <label htmlFor="password">Password</label>
                            <a className="credentials-link" href="/">Forgot password?</a>
                        </div>
                        <input className="credential-input" type="password" {...register("password", {required: {value: true, message: "Required field"}})} />
                        {errors.password && <p className="form-error">{errors.password.message}</p>}
                    </div>
                    <div className="credentials-button-container">
                        <button className="credential-button" type="submit">Sign in</button>
                    </div>
                    <div>
                        {errors.credentials && <p className="form-error">{errors.credentials.message}</p>}
                    </div>
                </form>
            </div>
            <div className="alternative-sign">
                <div>New to uniData?</div>
                <a className="credentials-link" href="/">Create an account</a>
            </div>
            <div className="flex flex-row w-[300px] justify-around pt-[24px]">
                <a className="credentials-link" href="/">Terms & Conditions</a>
                <a className="credentials-link" href="/">Privacy & Support</a>
            </div>
        </div>
    )
}

export default SignIn
