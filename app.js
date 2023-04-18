var friends = ["Meco", "Trey", "DeAmber", "Thomas", "Damion"];

function singSong() {
  for(var i = 99; i >= 0; i-- ) {
    var friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");
    var friendName = document.createElement("h3");
    friendName.textContent = friends[i % friends.length];
    friendDiv.appendChild(friendName);
    var songLyrics = document.createElement("p");

    if(i === 0) {
      songLyrics.textContent = "No more lines of code in the file";
    } else if(i === 1) {
      songLyrics.textContent = "1 line of code in the file,\n1 line of code;\n" + friends[i % friends.length] + " strikes one out,\nclears it all out,\nNo more lines of code in the file";
    } else {
      songLyrics.textContent = i + " lines of code in the file,\n" + i + " lines of code;\n" + friends[i % friends.length] + " strikes one out,\nclears it all out,\n" + (i - 1) + " lines of code in the file";
    }
    friendDiv.appendChild(songLyrics);
    document.body.appendChild(friendDiv);
  }
}

var singButton = document.getElementById("singButton");
singButton.addEventListener("click", singSong);
