import React, { useState, useEffect } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

const FetchComponent = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      if (response.ok) {
        const users = await response.json();
        setData(users);
      } else {
        throw new Error('Error in data retrieval');
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  return (
    <ListGroup className='mt-5'>
      <Form.Control
        placeholder='Search for a user...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {data
        .filter((user) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((user) => {
          return (
            <ListGroup.Item key={user.id} data-testid='listgroup-item'>
              {user.name} - {user.email} - {user.website}
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default FetchComponent;
