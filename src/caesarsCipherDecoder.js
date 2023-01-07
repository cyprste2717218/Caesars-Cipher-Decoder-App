function rot13(props) {

  const str = props.str;
  const result = props.result;
  /*
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const reg = /[a-zA-z]/;
    const noReg = /[^a-zA-Z]/;

    
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
  */
    return (
      <div style={{width: "100%", height: "200px", backgroundColor: "green", color: "white"}}>
        <h1>output here: {str} {result}</h1>
      </div>
    );

  
}

export default rot13;
 