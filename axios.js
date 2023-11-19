import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const axios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/data'); // Replace with your actual API endpoint
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // This will run when the component mounts

  return (
    <View>
      {data ? (
        <Text>Data: {JSON.stringify(data)}</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
      <Button title="Refresh Data" onPress={fetchData} />
    </View>
  );
};

export default axios;
