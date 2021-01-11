// const calcDisplay = document.getElementById("display").innerHTML;

// Function to clear display using clear (AC) button
document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("display").innerHTML = "0";
  document.getElementById("output").innerHTML = "";
});

// Function to commit numbers to the display
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

// Function to commit symbols to the display
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
inputSymbol("decimal", ".");

// Perform calculations
// Add event listener to equals button to perform calculation on display inner html
document.getElementById("equals").addEventListener("click", () => {
  document.getElementById("display").innerHTML = eval(document.getElementById("output").innerHTML);
  document.getElementById("output").innerHTML += " = " + eval(document.getElementById("output").innerHTML);

});
// When the decimal element is clicked, a "." should append to the currently displayed value; two "." in one number should not be accepted

// I should be able to perform any operation (+, -, *, /) on numbers containing decimal points

// If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign

// Pressing an operator immediately following "=" should start a new calculation that operates on the result of the previous evaluation

// My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).
