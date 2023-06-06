import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheckCircle } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';

const ContactItem = ({ contact, handleIssueResolved }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const resolveIssue = () => {
    setIsUpdating(true);
    axios
      .patch(`http://localhost:8080/admin/contacts/${contact._id}`, {
        issueResolved: true,
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
      <div className="space-y-2">
        <p className="font-semibold"><strong>Name</strong>: {contact.name}</p>
        <p><strong>Email</strong>: {contact.email}</p>
        
        <p><strong>Mobile Number</strong>: {contact.mobileNumber}</p>
        <p><strong>Subject</strong>: {contact.subject}</p>
        <p><strong>Message</strong>: {contact.message}</p>
        <p>
          <strong>Issue Resolved</strong>: {contact.issueResolved ? 'Yes' : 'No'}
        </p>
        {!contact.issueResolved && (
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
            Resolve Issue
          </button>
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
      .get('http://localhost:8080/admin/contacts')
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
      {contacts.length > 0 ? (
        <ul className="divide-y divide-gray-300">
          {contacts.map((contact) => (
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
  );
};

export default AdminPanel;
