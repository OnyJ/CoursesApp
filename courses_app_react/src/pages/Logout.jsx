
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import { logoutSuccess, logoutFail, loadUser } from '../redux/actions/accountAuthActions'

const Logout = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const dispatch = useDispatch()
    const osef = () => {
        fetch('http://localhost:3000/logout', {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': Cookies.get('token'),
            },
           })
           console.log(Cookies.get('token'))
           try {
               alert('deco ok')
            dispatch(logoutSuccess())
           } catch (error) {
               console.log(error)
               alert('déco fail')
               dispatch(logoutFail())
           }
           
        }

    return(
        <>
        <h1>Log out page</h1>
        <button onClick={() => osef()}>click me</button>
        {!isAuthenticated &&
        <>
        <h1>Tu t'es bien logout</h1>
        </>
        }
        </>
    )
    
}

export default Logout;


