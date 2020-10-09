import React from 'react';

function Image(props) {
  console.log(props);
  return <img {...props} />;
}

export default Image;
