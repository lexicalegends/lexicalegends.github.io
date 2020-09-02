var data = location.href;
data = decodeURIComponent(data);
data = data.split("#//");
data.shift();
var counter = 3;
var table = "";
document.getElementById('heading').innerHTML = data[0];
for (var i = 0; i < data[1]; i++) {
  table += "<tr>";
  for (var j = 0; j < data[2]; j++) {
    table += "<td>" + "<a onclick='check(" + data[counter] + ")' id='" + data[counter] + "'>" + data[counter + 1] + "</a></td>";
    counter+= 2;
  }
  table += "</tr>"
}
document.getElementById('table').innerHTML = table;
