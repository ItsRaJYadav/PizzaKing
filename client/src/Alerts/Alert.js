import React from 'react';
import { Button, Alert } from 'react-bootstrap';

function AddToWishlist(props) {
  const handleClick = () => {
    alert(`Item ${props.itemName} added successfully to database Wishlist`);
  };

  return (
    <>
      <Button variant="primary" onClick={handleClick}>
        Add to Wishlist
      </Button>
      {props.showAlert && (
        <Alert variant="success" className="mt-3">
          Item {props.itemName} added to Wishlist!
        </Alert>
      )}
    </>
  );
}

export default AddToWishlist;
