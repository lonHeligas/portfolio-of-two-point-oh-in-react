var lengthOfLastWord = function(s) {
  console.log(s)
  var s = " You look veryy gooody   "
  s = s.trim()
  const sArray = s.split(' ');
  console.log(sArray)
  const sWord = sArray[sArray.length -1];
 return sWord.length

 
  
  console.log("Yo")
};

lengthOfLastWord()