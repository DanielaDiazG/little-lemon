import { useEffect, useState } from 'react';

function Home({}) {
  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      const response = await window.fetchAPI(date);
      console.log(response);
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        style={{
          height: '300px',
          backgroundColor: '#495E57'
        }}
      >
        <h1 style={{ color: '#F4CE14' }}>Little Lemon</h1>
        <h3 style={{ color: 'white' }}>Chicago</h3>
        <spam>We are a family</spam>
      </div>
    </>
  );
}

export default Home;
