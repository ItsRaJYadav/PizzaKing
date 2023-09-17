import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiLoader } from 'react-icons/fi';
const apiUrl = process.env.NODE_ENV === 'production' ? 'https://pizzaking.onrender.com/admin/contacts' : 'http://localhost:8080/admin/contacts';


const ContactItem = ({ contact, handleIssueResolved }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');


  const resolveIssue = () => {
    setIsUpdating(true);
    axios
      .patch(`${apiUrl}/${contact._id}`, {
        issueResolved: true,
        replyMessage: replyMessage,
      })
      .then((response) => {
        console.log('Contact updated:', response.data);
        setIsUpdating(false);
        handleIssueResolved(contact._id);
      })
      .catch((error) => {
        console.log('An error occurred while updating the contact:', error);
        setIsUpdating(false);
      });
  };



  return (
    <li className="py-4">
      <div className="space-y-2 ">
        <p className="font-semibold"><strong>Name</strong>: {contact.name}</p>
        <p><strong>Email</strong>: {contact.email}</p>
        <p><strong>QueryID</strong>: {contact.complaintId}</p>

        <p><strong>Mobile Number</strong>: {contact.mobileNumber}</p>
        <p><strong>Subject</strong>: {contact.subject}</p>
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

        <p>
          <strong>Issue Resolved</strong>: {contact.issueResolved ? 'Yes' : 'No'}
        </p>
        {!contact.issueResolved && (
          <div>
            <textarea
              className="w-full p-2 mb-2 border border-gray-300 rounded-md"
              placeholder="Enter your reply message"
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
            />
            <button
              className="font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-700 text-white"
              onClick={resolveIssue}
              disabled={isUpdating}
            >
              {isUpdating ? (
                <span className="mr-2">
                  <FiLoader className="inline-block animate-spin" />
                </span>
              ) : null}
              Sumbit Response
            </button>
          </div>
        )}
      </div>
      
    </li>
  );
};

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);


  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.log('An error occurred while fetching the contacts:', error);
      });
  };

  const handleIssueResolved = (contactId) => {
    const updatedContacts = contacts.map((contact) => {
      if (contact._id === contactId) {
        return { ...contact, issueResolved: true };
      }
      return contact;
    });
    setContacts(updatedContacts);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Form Submissions</h1>
      <div className="max-h-100 overflow-y-auto ">
        {contacts.length > 0 ? (
          <ul className="divide-y divide-gray-300">
            {contacts.slice().reverse().map((contact) => (
              <ContactItem
                key={contact._id}
                contact={contact}
                handleIssueResolved={handleIssueResolved}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No contact form submissions found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
