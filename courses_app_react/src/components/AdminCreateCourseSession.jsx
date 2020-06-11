import React, { useState } from 'react';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import { createCourseSessionSuccess } from '../redux/actions/adminDashboardActions';

const AdminCreateCourseSession = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const [room, setRoom] = useState("")
    const [day, setDay] = useState("")
  
    const dispatch = useDispatch();
    const create = async () => {

       
        const data = {
            course_session: {
              room_id: room, 
              day: day
            }
          }
      const response = await fetch('http://localhost:3000/admins/course_sessions', {
            method: 'post', 
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token'),
            },
            body: JSON.stringify(data)
        })
     try {
         const course_session = await response.json()
         dispatch(createCourseSessionSuccess(course_session))
     } catch (error) {

     }

    }
    return(
        <div>    
         <h1>Admin course session</h1>
            <form onSubmit={create}>
              <input type="number" placeholder="room" value={room} onChange={(e) => setRoom(e.target.value)} required />
              <input type="text" placeholder="day" value={day} onChange={(e) => setDay(e.target.value)} required />
              <input type="submit" value="Envoyer" />
            </form>
          
      </div>
    )
}
export default AdminCreateCourseSession;