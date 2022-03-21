import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-link">
          <Link to="/">
            <i class="material-icons">home</i> Home
          </Link>
        </li>

        <li className="sidebar-link">
          <Link to="/">
            <i class="material-icons">playlist_add</i> Add list
          </Link>
        </li>

        <li className="sidebar-link">
          <Link to="/list">
            <i class="material-icons">list</i> View list
          </Link>
        </li>

        <li className="sidebar-link">
          <Link to="/settings">
            <i class="material-icons">settings</i> Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
