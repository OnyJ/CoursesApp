import React from 'react';
import AdminCreateCategory from '../components/AdminCreateCategory'
import AdminCreateCourse from '../components/AdminCreateCourse'

const AdminDashboard = () => {
    return(
        <div>
            <AdminCreateCategory/>
            <AdminCreateCourse/>
        </div>
    )
}

export default AdminDashboard;