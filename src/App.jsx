import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="heading">
        Sign in to uniData
      </div>
      <div className="mt-16 form-container">
        <form action="/" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <div className="label-container">
              <label htmlFor="email">Email Address</label>
            </div>
            <input type="email" name="email" {...register("email")} />
          </div>
          <div className="field">
            <div className="label-container">
              <label htmlFor="email">Password</label>
              <a href="/">Forgot password?</a>
            </div>
            <input type="password" name="password" {...register("password")} />
          </div>
          <div className="field">
            <div>
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-8 form-container">
        <div className="field">
          <div>
            New to uniData?
          </div>
          <a href="/">Create an account</a>
        </div>
      </div>
      <div className="mt-8 px-4 w-[320px]">
        <ul className="flex flex-row justify-between">
          <li><a className="hidden-link" href="/">Terms & Conditions</a></li>
          <li><a className="hidden-link" href="/">Privacy & Support</a></li>
        </ul>
      </div>
    </div>
  )
}

export default App
