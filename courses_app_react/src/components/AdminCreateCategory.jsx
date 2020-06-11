import React from 'react';
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux';
import { createCategorySuccess } from '../redux/actions/adminDashboardActions';

const AdminCreateCategory = () => {
    const dispatch = useDispatch();
    const create = async () => {

       
      const rep = await fetch('http://localhost:3000/admins/categories', {
            method: 'post', 
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token'),
            },
            body: JSON.stringify({ "category": {"name": 'react2'}})
        })
        .then(response => response.json())
        .then(response =>  {
            console.log(response)
            dispatch(createCategorySuccess(response))
            
        })

    }
    return(
        <>
            <h1>Admin category</h1>
            <button onClick={() =>create()}>clickme</button>
        </>
    )
}
export default AdminCreateCategory;