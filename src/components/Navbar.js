import React from 'react';
import { Link } from 'react-router-dom';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl flex items-center">
          <BookOutlinedIcon className="mr-2 ml-5" />
          Book Store
        </Link>
        <div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;