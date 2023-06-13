import React, { useState } from 'react';

function ShippingAddressPage() {
  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Shipping Address:', shippingAddress);
    // Reset the form fields
    setShippingAddress({
      street: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
    });
  };

  return (
    <div className="container mx-auto mt-8 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for shipping address */}
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          className="w-full border-gray-300 border p-2 mb-4"
          value={shippingAddress.street}
          onChange={handleInputChange}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          className="w-full border-gray-300 border p-2 mb-4"
          value={shippingAddress.city}
          onChange={handleInputChange}
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          className="w-full border-gray-300 border p-2 mb-4"
          value={shippingAddress.state}
          onChange={handleInputChange}
        />

        <label htmlFor="zipCode">ZIP Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          className="w-full border-gray-300 border p-2 mb-4"
          value={shippingAddress.zipCode}
          onChange={handleInputChange}
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className="w-full border-gray-300 border p-2 mb-4"
          value={shippingAddress.phoneNumber}
          onChange={handleInputChange}
        />

        {/* Submit button */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Save
        </button>
      </form>
    </div>
  );
}

export default ShippingAddressPage;
