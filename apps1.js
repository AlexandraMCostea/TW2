var names = [];
document.getElementById("demo").innerHTML =names;

function myFunctionAudio() {
  var x = document.createElement("AUDIO");

  if (x.canPlayType("audio/mpeg")) {
    x.setAttribute("src", "y2mate.com - lp_girls_go_wild_live_at_youtube_space_la_ebVjymxjo9I.mp3");
  } else {
    x.setAttribute("src","horse.ogg");
  }

  x.setAttribute("controls", "controls");
  document.body.appendChild(x);
}

function myFunction() {
  names.push("liliac");
  document.getElementById("demo").innerHTML = names;
}
function myFunction2() {
  names.pop();
  document.getElementById("demo").innerHTML =names;
}
function myFunction3() {
  var firstname = ["margaritar"];
  var lastname = ["lacramioare"];
  var name = firstname.concat(lastname); 
  document.getElementById("demo").innerHTML = name;
}