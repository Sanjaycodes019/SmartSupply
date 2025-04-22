import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiCalendar, FiEdit2, FiLogOut, FiMail, FiPhone } from 'react-icons/fi';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-1/474623898_1160862385561672_1615081927560140172_n.jpg?stp=c0.390.720.720a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ObI6e9X0r88Q7kNvwGJMKOj&_nc_oc=AdmprUO6mojdbJAMg0iaplP7mP5DM0rClo2jU7waWcnLyofjydr6NGLBQHl5RcpUm3g&_nc_zt=24&_nc_ht=scontent-otp1-1.xx&_nc_gid=oiBkWqRAxPywegfYIYjbPA&oh=00_AfGs78T_5LVND7NelBrAX0bv66PXe_y3E_FAiePOwHQNSA&oe=680C4039');

  const userDetails = {
    name: 'Sanjay Gupta',
    age: 21,
    address: 'Chandigarh',
    email: 'sahausanjay99@gmail.com',
    phone: '+91 9235054394',
    joinDate: 'January 2024'
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-yellow-400 transition duration-200"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="hidden md:block font-medium">{userDetails.name}</span>
      </button>

      {/* Profile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50"
        >
          <div className="p-4">
            {/* Profile Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-400">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 bg-yellow-400 p-1 rounded-full cursor-pointer hover:bg-yellow-500 transition duration-200"
                >
                  <FiEdit2 className="w-4 h-4 text-white" />
                </label>
                <input
                  id="profile-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{userDetails.name}</h3>
                <p className="text-sm text-gray-500">Member since {userDetails.joinDate}</p>
              </div>
            </div>

            {/* User Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <FiUser className="w-5 h-5 text-yellow-400" />
                <span>{userDetails.name}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <FiCalendar className="w-5 h-5 text-yellow-400" />
                <span>{userDetails.age} years old</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <FiMapPin className="w-5 h-5 text-yellow-400" />
                <span>{userDetails.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <FiMail className="w-5 h-5 text-yellow-400" />
                <span>{userDetails.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <FiPhone className="w-5 h-5 text-yellow-400" />
                <span>{userDetails.phone}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition duration-200">
                <FiLogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Profile; 