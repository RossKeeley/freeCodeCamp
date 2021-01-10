var input = document.getElementById("editor");
var inputText = document.getElementById("editor").value;
var output = document.getElementById("preview");
var outputText = document.getElementById("preview").innerHTML;


input.addEventListener("keyup", () => {
  document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value);
});

