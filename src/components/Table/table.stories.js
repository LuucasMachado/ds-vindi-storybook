import React from 'react';
import Table from './Table';

export default {
  component: Table,
  title: 'Table',
  name: 'Table-test'
};

const data = [ 
  { id: 9, name: "Customer 9", email: "customer.9@gmail.com", created_at: "2020-06-09T14:18:19.446Z", updated_at: "2020-06-09T14:18:19.446Z" },
  { id: 8, name: "Customer 8", email: "customer.8@gmail.com", created_at: "2020-06-09T14:18:19.436Z", updated_at: "2020-06-09T14:18:19.436Z" },
  { id: 7, name: "Customer 7", email: "customer.7@gmail.com", created_at: "2020-06-09T14:18:19.425Z", updated_at: "2020-06-09T14:18:19.425Z" },
  { id: 6, name: "Customer 6", email: "customer.6@gmail.com", created_at: "2020-06-09T14:18:19.405Z", updated_at: "2020-06-09T14:18:19.405Z" },
  { id: 5, name: "Customer 5", email: "customer.5@gmail.com", created_at: "2020-06-09T14:18:19.394Z", updated_at: "2020-06-09T14:18:19.394Z" },
  { id: 4, name: "Customer 4", email: "customer.4@gmail.com", created_at: "2020-06-09T14:18:19.381Z", updated_at: "2020-06-09T14:18:19.381Z" },
  { id: 3, name: "Customer 3", email: "customer.3@gmail.com", created_at: "2020-06-09T14:18:19.370Z", updated_at: "2020-06-09T14:18:19.370Z" },
  { id: 2, name: "Customer 2", email: "customer.2@gmail.com", created_at: "2020-06-09T14:18:19.361Z", updated_at: "2020-06-09T14:18:19.361Z" }
]

export const Default = () => <Table head={ ['Nome', 'Email'] } customers={ data }  />;
