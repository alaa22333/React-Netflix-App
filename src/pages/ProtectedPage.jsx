import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../Custom-hooks/useAuth'

const ProtectedPage = ({children}) => {
    const {currentUser}=useAuth()
if(currentUser){
    return children
}else{
    <Navigate to='/login'/>
}
}

export default ProtectedPage