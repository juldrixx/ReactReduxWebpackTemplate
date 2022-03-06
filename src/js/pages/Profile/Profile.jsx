import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <nav>
        <ul>
          <li>
            <Link to='/me/details'>Details</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Profile;
