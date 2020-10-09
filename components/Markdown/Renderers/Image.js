import React from 'react';
import { BASE_URL } from 'utils';

function Image({src, ...props}) {
  console.log(props);
  return <img src={`${BASE_URL}${src}`} {...props} />;
}

export default Image;
