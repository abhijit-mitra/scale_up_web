import React from 'react';
import Error from '../Error';

const Input = ({prepend, append, error,...rest}) => (
  <div className="input-wrapper">
    <div className="input-group">
    {
      prepend &&
      <div className="input-group-prepend">
        <div className="input-group-text">
          {prepend}
        </div>
      </div>
    }
      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" {...rest}/>
      {
        append &&
        <div className="input-group-append">
          <div className="input-group-text">
            {append}
          </div>
        </div>
      }
    </div>
    {error && <Error msg={error} style={{padding:'5px 10px'}}/>}
  </div>
);

Input.defaultProps={
  prepend:null,
  append:null,
  error:false
}

export default Input;
