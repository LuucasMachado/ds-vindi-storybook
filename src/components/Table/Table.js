import React from 'react';

export default function Table({head, customers }) {
  return (
    <table>
      <tr>
      { head.map(value => ( <th key={value}>{value}</th>)) }
      </tr>
 
      { customers.map((customer, index) => (
        <tr>
          <td>{ customer.name }</td>
          <td>{ customer.email }</td>
        </tr>
        ))
      }
     
    </table>
  );
}