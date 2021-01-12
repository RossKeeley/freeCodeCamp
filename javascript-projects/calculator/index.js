// const calcDisplay = document.getElementById("display").innerHTML;

// Function to clear display using clear (AC) button
document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("display").innerHTML = "0";
  document.getElementById("output").innerHTML = "";
});

// Function to commit numbers to the display console
function inputNumber(number, value) {
  document.getElementById(number).addEventListener("click", () => {
    if (document.getElementById("display").innerHTML === "0" || (document.getElementById("output").innerHTML).indexOf("=") > -1) {
      document.getElementById("display").innerHTML = "";
      document.getElementById("output").innerHTML = "";
    }
    document.getElementById("display").innerHTML += value;
    document.getElementById("output").innerHTML += value;
  })
}

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

// Function to commit symbols to the display console
function inputSymbol(symbol, value) {
  document.getElementById(symbol).addEventListener("click", () => {
    if (document.getElementById("output").innerHTML.indexOf("=") > -1) {
      document.getElementById("output").innerHTML = document.getElementById("display").innerHTML + value;
      document.getElementById("display").innerHTML = value;
    } else {
      document.getElementById("display").innerHTML = value;
      document.getElementById("output").innerHTML += value;
    };
  });
};

// Calling the function for each symbol as it is clicked on
inputSymbol("divide", " / ");
inputSymbol("multiply", " * ");
inputSymbol("subtract", " - ");
inputSymbol("add", " + ");

// Commit decimal symbol to the display console
document.getElementById("decimal").addEventListener("click", () => {
  if (document.getElementById("display").innerHTML.indexOf(".") < 0) {
    document.getElementById("output").innerHTML += document.getElementById("decimal").innerHTML;
    document.getElementById("display").innerHTML += document.getElementById("decimal").innerHTML;
  };
});

// inputSymbol("decimal", ".");

// Perform calculations
// Add event listener to equals button to perform calculation on display inner html
document.getElementById("equals").addEventListener("click", () => {
  document.getElementById("display").innerHTML = eval(document.getElementById("output").innerHTML);
  document.getElementById("output").innerHTML += " = " + eval(document.getElementById("output").innerHTML);

});
// When the decimal element is clicked, a "." should append to the currently displayed value; two "." in one number should not be accepted

// Numbers and symbols should appear seperately in the display, not together. This does not include decimals

// No more than one decimal point should appear per number i.e. only one on the display, but more than one should be allowed on the output

// The display should allow for decimals to appear to the right and left of numbers on the display
