
import './App.css';
import React, { useState, useEffect } from "react"
import * as yup from 'yup'
import axios from 'axios'



const schema = yup.object().shape({
    user: yup.string().required('Name is Required!'),
    email: yup.string().required('Email is Required!'),
    password: yup.string().required('Password is required!'),
    agree: yup.boolean().oneOf([true], 'Please check Terms of Service!')

})


export default function App() {

    const [form, setForm] = useState({ user: '', email: '', password: '', agree: false })
    const [errors, setErrors] = useState({ user: '', email: '', password: '', agree: false })
    const [disabled, setDisabled] = useState(true)

const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({...errors, [name]:''}))
    .catch(err=> setErrors({...errors, [name]: err.errors[0]}))
}

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setForm({ ...form, [name]: valueToUse })
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    const submit = event => {
        
        const newUser= {user: form.user.trim(), user: form.user, email: form.email, passowrd: form.password}
        axios.post('https://reqres.in/api/users', newUser)
        .then(res=> {
            setForm({ user: '', email: '', password: '', agree: false})
            console.log('Form Submitted!', res)
                   })
        .catch(err =>{
            console.log(err.response)

        })
    }

    return (
        <div className='App'>
            <div style={{color:'red'}}>
                <div>{errors.user}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.agree}</div>
            </div>
            
            <form onSubmit={submit}>
                <label>Name
        <input onChange={change} value={form.user} name="user" type='text' />
                </label>

                <label>Email
        <input onChange={change} name="email" type='text' />
                </label>

                <label>Password
      <input onChange={change} name="password" type='text' />
                </label>

                <label>Terms of Service
        <input onChange={change} value={form.agree} name="agree" type='checkbox' />
                </label>

                <button disabled={disabled}>
                    Submit
                </button>

            </form>
            
        </div>

    )
}

