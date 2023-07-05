
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShippingAddressPage() {
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    const [addresses, setAddresses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const history = useNavigate();

    useEffect(() => {
        const userId = currentUser._id;
        axios
            .get(`/api/users/addresses/${userId}`)
            .then((response) => {
                setAddresses(response.data);
            })
            .catch((error) => {
                console.error('Error fetching addresses:', error);
            });
    }, []);

    const handleUpdateAddress = (addressId) => {
        // Find the selected address from the addresses array
        const addressToUpdate = addresses.find((address) => address._id === addressId);

        // Set the selected address and open the modal
        setSelectedAddress(addressToUpdate);
        setShowModal(true);
    };

    const handleDeleteAddress = (addressId) => {
        Swal.fire({
            title: 'Delete Address',
            text: 'Are you sure you want to delete this address?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`/api/users/addresses/${addressId}`)
                    .then((response) => {
                        setAddresses((prevAddresses) =>
                            prevAddresses.filter((address) => address._id !== addressId)
                        );
                        Swal.fire('Deleted!', 'The address has been deleted.', 'success');
                    })
                    .catch((error) => {
                        console.error('Error deleting address:', error);
                        Swal.fire('Error', 'An error occurred while deleting the address.', 'error');
                    });
            }
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedAddress(null);
    };

    const handleAddressUpdate = () => {
        const updatedAddressData = {
          street: selectedAddress.street,
          city: selectedAddress.city,
          state: selectedAddress.state,
          zipCode: selectedAddress.zipCode,
          phoneNumber: selectedAddress.phoneNumber,
        };
      
        axios
          .put(`/api/users/addresses/${selectedAddress._id}`, updatedAddressData)
          .then((response) => {
            setAddresses((prevAddresses) =>
              prevAddresses.map((address) =>
                address._id === response.data._id ? response.data : address
              )
            );
            setShowModal(false);
            // Check if the address was successfully updated
            if (response.status === 200) {
              toast.success('Address Updated successfully', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            }
          })
          .catch((error) => {
            console.error('Error updating address:', error);
          });
      };
      
    const customModalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '12px',
            maxWidth: '600px',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0,0.4)',
            backdropFilter: 'blur(8px)',
            zIndex: '9999',
        },
    };
    return (
        <div className="container mx-auto mt-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Shipping Addresses</h2>
            {addresses.length === 0 ? (
                <p>No addresses found.</p>
            ) : (
                <ul>
                    {addresses.map((address) => (
                        <li key={address._id} className="mb-4 p-4 border rounded-md">
                            <p className="text-base">
                                <span className="font-bold">Street:</span> {address.street}
                            </p>
                            <p className="text-base">
                                <span className="font-bold">City:</span> {address.city}
                            </p>
                            <p className="text-base">
                                <span className="font-bold">State:</span> {address.state}
                            </p>
                            <p className="text-base">
                                <span className="font-bold">ZIP Code:</span> {address.zipCode}
                            </p>
                            <p className="text-base">
                                <span className="font-bold">Phone Number:</span> {address.phoneNumber}
                            </p>

                            <div className="flex justify-end mt-2">
                                <button
                                    className="flex items-center px-2 py-1 mr-2 text-gray-500 hover:text-gray-700"
                                    onClick={() => handleUpdateAddress(address._id)}
                                >
                                    <FiEdit className="mr-1" />
                                    Update
                                </button>
                                <button
                                    className="flex items-center px-2 py-1 text-red-500 hover:text-red-700"
                                    onClick={() => handleDeleteAddress(address._id)}
                                >
                                    <FiTrash2 className="mr-1" />
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Modal */}
            <Modal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                contentLabel="Update Address"
                style={customModalStyles}
            >
                {selectedAddress && (
                    <>
                        <div className="flex justify-center items-center">
                            <h2 className="text-xl font-bold mb-4 text-center">
                                Update Address
                            </h2>
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-9 mb-3"
                            >
                                <FontAwesomeIcon icon={faTimes} className="mr-2" />

                            </button>
                        </div>


                        <div className="px-6 py-6 lg:px-8">

                            <form className="space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="Street"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your Street
                                    </label>
                                    <input
                                        type="text"
                                        value={selectedAddress.street}
                                        onChange={(e) =>
                                            setSelectedAddress((prevAddress) => ({
                                                ...prevAddress,
                                                street: e.target.value,
                                            }))
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                        placeholder="name@company.com"
                                        required=""
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your city
                                    </label>
                                    <input
                                        type="text"
                                        value={selectedAddress.city}
                                        onChange={(e) =>
                                            setSelectedAddress((prevAddress) => ({
                                                ...prevAddress,
                                                city: e.target.value,
                                            }))
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your State
                                    </label>
                                    <input
                                        type="text"
                                        value={selectedAddress.state}
                                        onChange={(e) =>
                                            setSelectedAddress((prevAddress) => ({
                                                ...prevAddress,
                                                state: e.target.value,
                                            }))
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    />
                                </div>



                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your ZipCode
                                    </label>
                                    <input
                                        type="text"
                                        value={selectedAddress.zipCode}
                                        onChange={(e) =>
                                            setSelectedAddress((prevAddress) => ({
                                                ...prevAddress,
                                                zipCode: e.target.value,
                                            }))
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your phoneNumber
                                    </label>
                                    <input
                                        type="text"
                                        value={selectedAddress.phoneNumber}
                                        onChange={(e) =>
                                            setSelectedAddress((prevAddress) => ({
                                                ...prevAddress,
                                                phoneNumber: e.target.value,
                                            }))
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    />
                                </div>


                                <button
                                    onClick={handleAddressUpdate}
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                >
                                    update address
                                </button>

                            </form>
                        </div>


                    </>
                )}
            </Modal>
            <ToastContainer/>
        </div>
    );
}

export default ShippingAddressPage;

