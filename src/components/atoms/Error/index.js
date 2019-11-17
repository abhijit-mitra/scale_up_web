import React from 'react';

const Error = ({msg, ...rest}) => (
  <div className="alert alert-danger" role="alert" {...rest}>{msg}</div>
);

Error.defaultProps={
  msg:'Sorry Something Went Wrong!'
}

export default Error;
