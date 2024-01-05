import React from 'react'
import { useAuth } from '../hooks/AuthContext'

const Profile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div>Please log in.</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {currentUser.email}</p>
      <p>Phone Number: {currentUser.phoneNumber}</p>
      <p>First Name: {currentUser.firstName}</p>
      <p>Last Name: {currentUser.lastName} </p>
    </div>
  )
}

export default Profile
