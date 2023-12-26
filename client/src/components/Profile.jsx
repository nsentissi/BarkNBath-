import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      <h2>Welcome</h2>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
