import React, { useState } from 'react';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import { createRoomSuccess } from '../redux/actions/adminDashboardActions';

const AdminCreateRoom = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const [isAvailable, setIsAvailable] = useState("")
  
    const dispatch = useDispatch();
    const create = async () => {

       
        const data = {
            room: {
              available: isAvailable
            }
          }
      const response = await fetch('http://localhost:3000/admins/rooms', {
            method: 'post', 
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token'),
            },
            body: JSON.stringify(data)
        })
     try {
         const room = await response.json()
         dispatch(createRoomSuccess(room))
     } catch (error) {

     }

    }
    return(
        <div>    
         <h1>Admin room</h1>
            <form onSubmit={create}>
              <input type="text" placeholder="isAvailable" value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)} required />
              <input type="submit" value="Envoyer" />
            </form>
          
      </div>
    )
}
export default AdminCreateRoom;