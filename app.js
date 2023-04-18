var friends = ["Meco", "Trey", "DeAmber", "Thomas", "Damion"];

for(var i = 99; i >= 0; i-- ) {
  if(i === 0) {
    console.log("No more lines of code in the file");
  } else if(i === 1) {
    console.log("1 line of code in the file,");
  } else {
    console.log(i + " lines of code in the file,");
  }
  // cant figure out how to remove the last line once i get to 0. to keep it from saying "-1 lines of code in the file"

  console.log(i + " lines of code in a file, " + i + " lines of code; " + friends[i % friends.length] + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file");
}
