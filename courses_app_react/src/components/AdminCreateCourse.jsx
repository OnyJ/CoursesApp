import React, { useState } from 'react';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import { createCourseSuccess } from '../redux/actions/adminDashboardActions';

const AdminCreateCourse = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [name, setName] = useState("")
    const [teacher, setTeacher] = useState("")
  
    const dispatch = useDispatch();
    const create = async () => {

       
        const data = {
            course: {
              name: name,
              teacher_id: teacher
            }
          }
      const response = await fetch('http://localhost:3000/admins/courses', {
            method: 'post', 
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token'),
            },
            body: JSON.stringify(data)
        })
     try {
         const course = await response.json()
         dispatch(createCourseSuccess(course))
     } catch (error) {

     }

    }
    return(
        <div>    
         <h1>Admin course</h1>
            <form onSubmit={create}>
              <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" placeholder="teacher" value={teacher} onChange={(e) => setTeacher(e.target.value)} required />
              <input type="submit" value="Envoyer" />
            </form>
          
      </div>
    )
}
export default AdminCreateCourse;