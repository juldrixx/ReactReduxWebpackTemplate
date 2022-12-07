import React from 'react';

function Error() {
  const a = new Error('a');
  return <div>{a}</div>;
}

export default Error;
