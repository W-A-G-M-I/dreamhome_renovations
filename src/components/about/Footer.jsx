import React from "react";


import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

function Foooter() {
  return (
  
    <div className="flex space-x-6 justify-center items-center bg-gray-100 p-7">
           <p className="justify-start p-14">© 2035 by M&B Remodeling. Powered and secured by Wix</p>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-600 w-8 h-8 hover:text-blue-800" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-red-600 w-8 h-8 hover:text-red-800" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400 w-8 h-8 hover:text-blue-600" />
      </a>
    </div>
  );
};

export default Foooter;

