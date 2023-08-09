var character = 16;

if (!isNaN(character)) {
  console.log("digit");
} 
else if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
  console.log("Latin");
} 
else {
  console.log(0);
}
