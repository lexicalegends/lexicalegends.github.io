var counter;
function print(x, y) {
  counter = 0;
  var table = ""
      document.getElementById('width').innerHTML = "<h2>" + y + "</h2>";
      document.getElementById('height').innerHTML = "<h2>" + x + "</h2>";
  for (var i = 0; i < x; i++) {
    table += "<tr>"
    for (var j = 0; j < y; j++) {
      counter++;
      table += "<td class='square'>"+counter+"</td>"
    }
    table += "</tr>"
}
document.getElementById("board").innerHTML = table;
}

var cont = 0
function getMult() {
  print(mult[cont][0], mult[cont][1]);
  cont++;
}

function reveal() {
  var divs = document.getElementsByClassName( 'square' );

[].slice.call( divs ).forEach(function ( td ) {
    td.style.opacity = 1;
    td.style.border = "solid 1px black"
});
document.getElementById('width').innerHTML = "<h2>The area of the rectangle is " + counter + "</h2>"
document.getElementById('height').innerHTML = ""
if (cont == mult.length) {
  document.getElementById('width').innerHTML += "<h3>Game over</h3>"
}

}
