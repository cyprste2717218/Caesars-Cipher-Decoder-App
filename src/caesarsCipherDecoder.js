import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

function rot13(props) {

  const str = props.str.toUpperCase();

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const reg = /[a-zA-z]/;
  const noReg = /[^a-zA-Z]/;
  let result = "";



    for (let i = 0; i < str.length; i++) {
      if (noReg.test(str[i])) {
        result += str[i];
      }
      else if ((alphabet.indexOf(str[i]) - 13 < 0) && (reg.test(str[i])))  {
        result += alphabet[25 + (alphabet.indexOf(str[i]) - 12)]
  
      } else if ((alphabet.indexOf(str[i]) - 13 >= 0) && (reg.test(str[i]))) {
        result += alphabet[alphabet.indexOf(str[i]) -13];
      }
  
  
  
    
  }

 
  
    return (
      <Form.Control 
      readOnly
      aria-label="Large"
      aria-describedby="inputGroup-sizing-sm"
      aria-readonly
      value={result}
    /> 
    );

  
}

export default rot13;
 