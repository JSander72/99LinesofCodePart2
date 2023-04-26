let friends = ["Meco", "Trey", "DeAmber", "Thomas", "Damion"];
function singSong() {

for (let j = 0; j < friends.length; j++) {

  let friendDiv = document.createElement("div");
  friendDiv.setAttribute("id", "friend");
  document.body.appendChild(friendDiv);

    for (let i = 99; i >= 0; i--) {
      let para = document.createElement("p");
      let node;
      if (i === 0) {
        node = document.createTextNode("No more lines of code in the file");
      } else if (i === 1) {
        node = document.createTextNode("1 line of code in the file");
      } else {
        node = document.createTextNode(i + " lines of code in the file");
      }
      para.appendChild(node);
      document.getElementById("friend").appendChild(para);
      let para2 = document.createElement("p");
      let node2 = document.createTextNode(i + " lines of code in a file. "+ i + " lines of code; " + friends[i % friends.length] + " strickes one out, clears it all out. ");
      para2.appendChild(node2);
      document.getElementById("friend").appendChild(para2);
    }
  }
}

let singButton = document.getElementById("singButton");
singButton.addEventListener("click", singSong);
