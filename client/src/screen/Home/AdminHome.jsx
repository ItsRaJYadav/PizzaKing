import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';

const AdminHomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        background: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          color: '#333',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        Welcome to the Admin Home Page
      </h1>
      <p
        style={{
          fontSize: '1.5rem',
          color: '#777',
          marginBottom: '1.5rem',
          animation: 'fadeIn 1s ease-in',
        }}
      >
        Here you can access various admin functionalities.
      </p>
      <Link to='admin' style={{ display: 'flex', marginBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#4CAF50',
              marginBottom: '1rem',
            }}
          >
            <FaPlus style={{ fontSize: '2rem', color: '#fff' }} />
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Create</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#1E90FF',
              marginBottom: '1rem',
            }}
          >
            <FaEye style={{ fontSize: '2rem', color: '#fff' }} />
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Read</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#FFD700',
              marginBottom: '1rem',
            }}
          >
            <FaPencilAlt style={{ fontSize: '2rem', color: '#fff' }} />
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Update</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#FF0000',
              marginBottom: '1rem',
            }}
          >
            <FaTrash style={{ fontSize: '2rem', color: '#fff' }} />
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Delete</p>
        </div>
      </Link>

      <div >
        <img
          src="https://i.pinimg.com/originals/b6/6e/8f/b66e8ffa547746f4085ecc197cd588b9.gif"
          alt="Admin"
          style={{
            width: '300px',
            height: 'auto',
            marginTop: '1rem',
          }}
        />
      </div>
    </div>
  );
};

export default AdminHomePage;
