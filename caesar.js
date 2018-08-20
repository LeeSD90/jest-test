function caesar(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encodedString = "";

  let checkChar = function(char) {
    if(alphabet.includes(char.toLowerCase())) return true;
    return false;
  }

  let encodeChar = function(char) {
    let index = alphabet.indexOf(char.toLowerCase()) + shift;
    
    if(index <= 0) { index += 26; }
    else if(index >= 26) { index -= 26; }

    let encodedChar = alphabet.charAt(index);
    return encodedChar;
  }

  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i);
    
    if(checkChar(char)) {
      char === char.toLowerCase() ? encodedString += encodeChar(char)
                                  : encodedString += encodeChar(char).toUpperCase();
    }
    else { 
      encodedString += char;
    };
  }
  
  return encodedString;
};

module.exports = caesar;