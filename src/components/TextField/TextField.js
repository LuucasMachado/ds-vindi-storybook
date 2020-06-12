import React from 'react';

export default function TextField({name, value }) {
  return (
    <div className="list-item">
      <input type="text" name={name} value={value}  />
    </div>
  );
}