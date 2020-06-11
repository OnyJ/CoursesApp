import React from 'react';
import AdminCreateCategory from '../components/AdminCreateCategory'
import AdminCreateCourse from '../components/AdminCreateCourse'
import AdminCreateRoom from '../components/AdminCreateRoom'
import AdminCreateCourseSession from '../components/AdminCreateCourseSession'

const AdminDashboard = () => {
    return(
        <div>
            <AdminCreateCategory/>
            <AdminCreateCourse/>
            <AdminCreateRoom/>
            <AdminCreateCourseSession/>
        </div>
    )
}

export default AdminDashboard;