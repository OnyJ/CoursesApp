import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { registerFail, registerSuccess } from '../redux/actions/accountAuthActions'

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const dispatch = useDispatch()
  const history = useHistory();

  const register = async (e) => {
    e.preventDefault()
    const API_URL = process.env.REACT_APP_API_URL
    const data = {
      user: {
        email: email,
        password: password, 
        password_confirmation: passwordConfirmation
      }
    }

    const response = await fetch(`http://localhost:3000/signup`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    try {
      const token = await response.headers.get('authorization').split(' ')[1]
      const user = await response.json()
      const userToRegister = { token, user }
      dispatch(registerSuccess(userToRegister))
    } catch (error) {
      console.log(error)
      alert("Erreur d'enregistrement")
      dispatch(registerFail())
      return false
    }

    //history.push("/");
  }

  return (
    <div>
      <form onSubmit={register}>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  )
}

export default Register;