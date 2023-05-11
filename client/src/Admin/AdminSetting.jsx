import React from "react";
import { Link } from "react-router-dom";

const AdminSettings = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Settings</h1>
      <div className="flex flex-col mb-4">
        <label htmlFor="company-name" className="font-medium mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company-name"
          name="company-name"
          className="rounded-lg border border-gray-400 py-2 px-3"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="admin-email" className="font-medium mb-2">
          Admin Email
        </label>
        <input
          type="email"
          id="admin-email"
          name="admin-email"
          className="rounded-lg border border-gray-400 py-2 px-3"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="timezone" className="font-medium mb-2">
          Timezone
        </label>
        <select
          id="timezone"
          name="timezone"
          className="rounded-lg border border-gray-400 py-2 px-3"
        >
          <option value="GMT-5">GMT-5</option>
          <option value="GMT-6">GMT-6</option>
          <option value="GMT-7">GMT-7</option>
          <option value="GMT-8">GMT-8</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="language" className="font-medium mb-2">
          Language
        </label>
        <select
          id="language"
          name="language"
          className="rounded-lg border border-gray-400 py-2 px-3"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>
      <div className="flex justify-between">
        <Link
          to="/dashboard"
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </Link>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
