var link = "/games/jumbled-sentence/";
var content;
var order;
function tableContent() {
  link += "#//" + document.getElementById('title').value;
  link += "#//" + document.getElementById('row').value;
  link += "#//" + document.getElementById('collumn').value;
  var table1 = "";
  for (var i = 0; i < document.getElementById('row').value; i++) {
    table1 += "<tr>";
    for (var j = 0; j < document.getElementById('collumn').value; j++) {
      table1 += "<td><input value='' class='content'></td>";
    }
    table1 += "</tr>"
  }
  document.getElementById('contentTable').innerHTML = "<tr><th colspan=" + document.getElementById('collumn').value + ">Add the jumbled sentences here (type a space for blank cells).</th></tr>" + table1 + '    <button type="button" onclick="tableOrder()">Go!</button>';
}
function tableOrder() {
  var table3 = "";
  for (var i = 0; i < document.getElementById('row').value; i++) {
    table3 += "<tr>";
    for (var j = 0; j < document.getElementById('collumn').value; j++) {
      table3 += "<td><input type='number' class='order'></td>";
    }
    table3 += "</tr>"
  }
  document.getElementById('orderTable').innerHTML = "<tr><th colspan=" + document.getElementById('collumn').value + ">Type the order of the cells here (use '0' for blank cells).</th></tr>" +  table3 + '    <button type="button" onclick="read()">Go!</button>';;
}
function read() {
  content = document.getElementsByClassName("content");
  order = document.getElementsByClassName("order");
  for (var i = 0; i < content.length; i++) {
    link += "#//" + order[i].value + "#//" + content[i].value;
  }
  location.href = link;
}
