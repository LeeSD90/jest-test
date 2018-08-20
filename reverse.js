function reverse(string) {
  let reverse;

  for(i = string.length - 1; i >= 0; i--){
    reverse += string.charAt(i);
  }

  return reverse;
}

module.exports = reverse;