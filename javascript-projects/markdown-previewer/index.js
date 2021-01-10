var input = document.getElementById("editor");

document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value);

input.addEventListener("keyup", () => {
  document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value);
});
