

var currentScore=20;
var rdm = Math.floor(Math.random() * 21);


  function checkOption() {
      var num = document.getElementById("userNum").value;


      if(num < rdm){
        document.getElementById("hint").innerHTML = "VER LOW";
        currentScore = currentScore - 2;
        document.getElementById("numScore").innerHTML = currentScore;
      }else if (num > rdm) {
        document.getElementById("hint").innerHTML = "VERY HEIGHT";
      currentScore = currentScore - 2;
        document.getElementById("numScore").innerHTML = currentScore;
      }else {
        document.getElementById("state").innerHTML = "WON";
        document.body.style.backgroundColor = "#444444";
      };


  };
