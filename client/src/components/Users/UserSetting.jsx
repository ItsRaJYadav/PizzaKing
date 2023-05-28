import React, { useState, useEffect } from 'react';

const UserAddressPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    houseNumber: '',
    area: '',
    pincode: '',
    city: '',
    phone: ''
  });

  useEffect(() => {
    // Load addresses from localStorage
    const savedAddresses = localStorage.getItem('addresses');
    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses));
    }
  }, []);

  useEffect(() => {
    // Save addresses to localStorage
    localStorage.setItem('addresses', JSON.stringify(addresses));
  }, [addresses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    setAddresses([...addresses, newAddress]);
    setNewAddress({
      houseNumber: '',
      area: '',
      pincode: '',
      city: '',
      phone: ''
    });
  };

  const handleUpdateAddress = (index, updatedAddress) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = updatedAddress;
    setAddresses(updatedAddresses);
  };

  const handleDeleteAddress = (index) => {
    const filteredAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(filteredAddresses);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">User Address</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Saved Addresses</h2>
        {addresses.length === 0 ? (
          <p>No addresses found.</p>
        ) : (
          <ul>
            {addresses.map((address, index) => (
              <li key={index} className="mb-4">
                <div className="flex flex-wrap items-center">
                  <input
                    type="text"
                    value={address.houseNumber}
                    name="houseNumber"
                    placeholder="House Number"
                    className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
                    onChange={(e) =>
                      handleUpdateAddress(index, {
                        ...address,
                        houseNumber: e.target.value
                      })
                    }
                  />
                  <input
                    type="text"
                    value={address.area}
                    name="area"
                    placeholder="Area"
                    className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
                    onChange={(e) =>
                      handleUpdateAddress(index, {
                        ...address,
                        area: e.target.value
                      })
                    }
                  />
                  <input
                    type="text"
                    value={address.pincode}
                    name="pincode"
                    placeholder="Pincode"
                    className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
                    onChange={(e) =>
                      handleUpdateAddress(index, {
                        ...address,
                        pincode: e.target.value
                      })
                    }
                  />
                  <input
                    type="text"
                    value={address.city}
                    name="city"
                    placeholder="City"
                    className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
                    onChange={(e) =>
                      handleUpdateAddress(index, {
                        ...address,
                        city: e.target.value
                      })
                    }
                  />
                  <input
                    type="text"
                    value={address.phone}
                    name="phone"
                    placeholder="Phone"
                    className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
                    onChange={(e) =>
                      handleUpdateAddress(index, {
                        ...address,
                        phone: e.target.value
                      })
                    }
                  />
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 mb-2"
                    onClick={() => handleDeleteAddress(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Add New Address</h2>
        <form onSubmit={handleAddAddress} className="flex flex-wrap items-center">
          <input
            type="text"
            value={newAddress.houseNumber}
            name="houseNumber"
            placeholder="House Number"
            className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
            onChange={handleInputChange}
          />
          <input
            type="text"
            value={newAddress.area}
            name="area"
            placeholder="Area"
            className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
            onChange={handleInputChange}
          />
          <input
            type="text"
            value={newAddress.pincode}
            name="pincode"
            placeholder="Pincode"
            className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
            onChange={handleInputChange}
          />
          <input
            type="text"
            value={newAddress.city}
            name="city"
            placeholder="City"
            className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
            onChange={handleInputChange}
          />
          <input
            type="text"
            value={newAddress.phone}
            name="phone"
            placeholder="Phone"
            className="border border-gray-300 rounded px-4 py-2 mr-4 mb-2 w-full sm:w-auto"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 mb-2"
          >
            Add Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAddressPage;
