var display = document.getElementById("display");
var output = document.getElementById("output");
// Function to clear display and output console using clear (AC) button
document.getElementById("clear").addEventListener("click", () => {
  display.innerHTML = "0";
  output.innerHTML = "";
});
// Function to commit numbers to the display and output console
function inputNumber(number, value) {
  document.getElementById(number).addEventListener("click", () => {
    if (display.innerHTML === "0" || (output.innerHTML).includes("=")) {
      display.innerHTML = "";
      output.innerHTML = "";
    } else if (isNaN(display.innerHTML) == true && display.innerHTML.indexOf(".") < 0) {
      display.innerHTML = "";
    };
    display.innerHTML += value;
    output.innerHTML += value;
  });
};
// Calling the funciton for each number as it is clicked on
inputNumber("zero", 0);
inputNumber("one", 1);
inputNumber("two", 2);
inputNumber("three", 3);
inputNumber("four", 4);
inputNumber("five", 5);
inputNumber("six", 6);
inputNumber("seven", 7);
inputNumber("eight", 8);
inputNumber("nine", 9);
// Function to commit symbols to the display and ouptut console
function inputSymbol(symbol, value) {
  document.getElementById(symbol).addEventListener("click", () => {
    if (output.innerHTML.includes("=")) {
      output.innerHTML = display.innerHTML + value;
      display.innerHTML = value;
    } else if (value == "-" && isNaN(output.innerHTML.slice(output.innerHTML.length - 1, output.innerHTML.length)) == false) {
        display.innerHTML = value;
        output.innerHTML += value;
    } else if (value == "-" && isNaN(display.innerHTML) == true && isNaN(output.innerHTML.slice(output.innerHTML.length - 2, output.innerHTML.length - 1)) == false) {
        display.innerHTML = value;
        output.innerHTML += value;
    } else if (value == "-" && isNaN(display.innerHTML) == true && isNaN(output.innerHTML.slice(output.innerHTML.length - 2, output.innerHTML.length - 1)) == true) {
        output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1);
        display.innerHTML = value;
        output.innerHTML += value;
    } else if (value !== "-" && isNaN(output.innerHTML.slice(output.innerHTML.length - 1, output.innerHTML.length)) == false) {
        display.innerHTML = value;
        output.innerHTML += value;
    } else if (value !== "-" && isNaN(output.innerHTML.slice(output.innerHTML.length - 2, output.innerHTML.length - 1)) == true) {
        output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 2);
        display.innerHTML = value;
        output.innerHTML += value;
    } else if (isNaN(display.innerHTML) == true && isNaN(output.innerHTML.slice(output.innerHTML.length - 1, output.innerHTML.length)) == true) {
        output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1);
        display.innerHTML = value;
        output.innerHTML += value;
    };
  });
};
// Calling the function for each symbol as it is clicked on
inputSymbol("divide", "/");
inputSymbol("multiply", "*");
inputSymbol("subtract", "-");
inputSymbol("add", "+");
// Commit decimal symbol to the display and output console
document.getElementById("decimal").addEventListener("click", () => {
  if (display.innerHTML.indexOf(".") < 0) {
    output.innerHTML += document.getElementById("decimal").innerHTML;
    display.innerHTML += document.getElementById("decimal").innerHTML;
  };
});
// Perform calculations contained in ouput console when equals button clicked, and display answer in display and output console
document.getElementById("equals").addEventListener("click", () => {
  display.innerHTML = eval(output.innerHTML);
  output.innerHTML += " = " + eval(output.innerHTML);
});
