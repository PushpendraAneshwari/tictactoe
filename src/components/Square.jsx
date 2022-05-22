import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button type="Button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
