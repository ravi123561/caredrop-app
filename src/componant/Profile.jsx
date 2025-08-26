import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const togglePushNotifications = () => {
    setPushNotificationsEnabled(!pushNotificationsEnabled);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User Profile</h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setActiveTab('profile')}
          className={`p-2 ${activeTab === 'profile' ? 'bg-red-500 text-white' : 'text-gray-700'}`}
        >
          Profile Info
        </button>
        <button
          onClick={() => setActiveTab('donations')}
          className={`p-2 ${activeTab === 'donations' ? 'bg-red-500 text-white' : 'text-gray-700'}`}
        >
          Donation History
        </button>
        <button
          onClick={() => setActiveTab('health')}
          className={`p-2 ${activeTab === 'health' ? 'bg-red-500 text-white' : 'text-gray-700'}`}
        >
          Health Info
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`p-2 ${activeTab === 'notifications' ? 'bg-red-500 text-white' : 'text-gray-700'}`}
        >
          Notification Preferences
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`p-2 ${activeTab === 'settings' ? 'bg-red-500 text-white' : 'text-gray-700'}`}
        >
          Account Settings
        </button>
        <button
          onClick={() => setActiveTab('donationRequests')}
          className={`p-2 ${activeTab === 'donationRequests' ? 'bg-red-500 text-white' : 'text-gray-700'}`}
        >
          Donation Requests
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`p-2 ${activeTab === 'support' ? 'bg-red-500 text-white' : 'text-gray-700'}`}
        >
          Support & Help
        </button>
      </div>

      {/* Profile Information */}
      {activeTab === 'profile' && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
          <p><strong>Name:</strong> Ravi Kant Tiwari</p>
          <p><strong>Blood Group:</strong> B+</p>
          <p><strong>Email:</strong> ravikanttiwari286@gamil.com</p>
          <p><strong>Phone:</strong> +91 - 6386593139</p>
          <p><strong>Address:</strong> Lucknow, Uttar Pradesh</p>
        </div>
      )}

      {/* Donation History */}
      {activeTab === 'donations' && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Donation History</h3>
          <ul>
            <li>Date: 01/01/2022, Location: City Blood Bank, Quantity: 1 Unit</li>
            <li>Date: 06/12/2021, Location: City Hospital, Quantity: 1 Unit</li>
          </ul>
          <p><strong>Next Donation:</strong> Eligible to donate on 01/01/2023</p>
        </div>
      )}

      {/* Health Information */}
      {activeTab === 'health' && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Health Information</h3>
          <p><strong>Medical Conditions:</strong> None</p>
          <p><strong>Restrictions:</strong> Eligible for donation</p>
          <p><strong>Weight:</strong> 70 kg</p>
          <p><strong>Height:</strong> 175 cm</p>
        </div>
      )}

      {/* Notification Preferences */}
      {activeTab === 'notifications' && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
          <div>
            <p><strong>Donation Drive Notifications:</strong></p>
            <label>
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={toggleNotifications}
              />
              Enable notifications for upcoming donation drives and requests.
            </label>
          </div>
          <div className="mt-4">
            <p><strong>Push Notifications:</strong></p>
            <label>
              <input
                type="checkbox"
                checked={pushNotificationsEnabled}
                onChange={togglePushNotifications}
              />
              Enable push notifications for donation reminders or news.
            </label>
          </div>
        </div>
      )}

      {/* Account Settings */}
      {activeTab === 'settings' && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
          <p><strong>Change Password</strong></p>
          <p><strong>Update Contact Information</strong></p>
          <p><strong>Manage Privacy Settings</strong></p>
        </div>
      )}

      {/* Donation Requests */}
      {activeTab === 'donationRequests' && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Donation Requests</h3>
          <div>
            <p><strong>Request for Blood:</strong> If you need blood, you can request here.</p>
            <p><strong>Current/Upcoming Donation Drives:</strong> Blood donation drives in your area.</p>
          </div>
        </div>
      )}

      {/* Support & Help */}
      {activeTab === 'support' && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Support & Help</h3>
          <ul>
            <li><strong>FAQ about blood donation</strong></li>
            <li><strong>Contact support for any issues</strong></li>
            <li><strong>Guidelines for safe donation</strong></li>
          </ul>
        </div>
      )}

      {/* Logout Option */}
      {activeTab === 'logout' && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Logout</h3>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full">
            Logout
          </button>
        </div>
      )}

      {/* Donor Certification or Reports */}
      {activeTab === 'reports' && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Donor Certification or Reports</h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full">
            Download Donor Certificate
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4">
            View Donation Impact Report
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
