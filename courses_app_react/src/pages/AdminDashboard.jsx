import React from 'react';
import AdminCreateCategory from '../components/AdminCreateCategory'
import AdminCreateCourse from '../components/AdminCreateCourse'
import AdminCreateRoom from '../components/AdminCreateRoom'

const AdminDashboard = () => {
    return(
        <div>
            <AdminCreateCategory/>
            <AdminCreateCourse/>
            <AdminCreateRoom/>
        </div>
    )
}

export default AdminDashboard;