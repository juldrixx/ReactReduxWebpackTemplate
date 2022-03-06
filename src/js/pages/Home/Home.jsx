import React from 'react';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>{JSON.stringify(window._env_, null, 2)}</p>
    </>
  )
}

export default Home;
