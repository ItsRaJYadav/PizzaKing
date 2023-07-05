import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function ContactList({ email }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContactsByEmail(email);
  }, [email]);

  const fetchContactsByEmail = async (email) => {
    try {
      const response = await axios.get(`/api/user/contacts?email=${email}`);
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Contact Data</h1>
      {contacts.length === 0 ? (
        <p>No contacts found for the given email.</p>
      ) : (
        <ul className="list-disc pl-4">
          {contacts.slice().reverse().map((contact) => (
            <li key={contact.id} className="mb-4">
              <h2 className="text-lg font-bold mb-1"><strong>Date:</strong> {new Date(contact.date).toLocaleString()}</h2>
              <p className="text-gray-600"><strong>Name:</strong> {contact.name}</p>
              <p className="text-gray-600"><strong>Email:</strong> {contact.email}</p>
              <p className="text-gray-600"><strong>Subject:</strong> {contact.subject}</p>
              <p className="text-gray-600"><strong>Mobile:</strong> {contact.mobileNumber}</p>
              <div className="flex items-center">
                <span className="text-sm text-green-500 mr-1"><strong>Issue Resolved:</strong></span>
                {contact.issueResolved ? (
                  <span className="text-green-600">Yes</span>
                ) : (
                  <span className="text-red-600">No</span>
                )}
              </div>
              <div className="mt-2">
                <strong>Message : </strong>
                {contact.message.length > 100 ? (
                  <span>
                    {contact.message.slice(0, 100)}{" "}
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => {
                        alert(contact.message);
                      }}
                    >
                      Read More
                    </button>
                  </span>
                ) : (
                  <span>{contact.message}</span>
                )}
              </div>
              <hr className="border-t border-gray-800 mb-4 mt-10" />

            </li>
            
          ))}
        </ul>


      )}
    </div>
  );
}

function App() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <div className="container mx-auto p-4">
      <ContactList email={currentUser.email} />
    </div>
  );
}

export default App;
