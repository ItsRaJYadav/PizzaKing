import React from 'react';

function UserSettings() {
  const handleSave = () => {
    // Handle saving user settings
    
  };

  return (
    <div className="container mx-auto mt-8 ml-72">
      <h2 className="text-2xl font-bold mb-4">User Settings</h2>
      <form>
       
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" className="w-full border-gray-300 border p-2 mb-4" />
        
        {/* Submit button */}
        <button type="button" onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserSettings;
