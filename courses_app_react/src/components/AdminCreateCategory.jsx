import React, {useState} from 'react';
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux';
import { createCategorySuccess } from '../redux/actions/adminDashboardActions';

const AdminCreateCategory = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch();
    const create = async () => {
    
        const data = {
            category: {
                name: name
            }
        }
       
      const rep = await fetch('http://localhost:3000/admins/categories', {
            method: 'post', 
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token'),
            },
            body: JSON.stringify(data)
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
            <form onSubmit={create}>
              <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="submit" value="Envoyer" />
            </form>
        </>
    )
}
export default AdminCreateCategory;