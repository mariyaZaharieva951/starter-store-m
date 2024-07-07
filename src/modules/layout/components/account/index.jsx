"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronDown,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left ">
      <div
        className="flex gap-5 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <FontAwesomeIcon
          icon={faUser}
          className="text-gray border border-gray-200 rounded-full p-3"
          size="24px"
        />
        <div className="flex flex-col">
          <span className="text-gray"></span>
        <div className="flex items-center text-nowrap">
          <span>My Account</span>
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <button
            // onClick={onLogout}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4 mr-2" />
            Exit
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;
