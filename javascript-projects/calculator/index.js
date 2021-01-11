// const calcDisplay = document.getElementById("display").innerHTML;

// Function to clear display using clear (AC) button
document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("display").innerHTML = "0";
});

// Function to add numbers to the display
function inputNumber(number, value) {
  document.getElementById(number).addEventListener("click", () => {
    if (document.getElementById("display").innerHTML === "0") {
      document.getElementById("display").innerHTML = "";
    }
    document.getElementById("display").innerHTML += value;
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

function inputSymbol(symbol, value) {
  document.getElementById(symbol).addEventListener("click", () => {
    document.getElementById("display").innerHTML += value;
  })
}

// Calling the function for each symbol as it is clicked on
inputSymbol("divide", " / ");
inputSymbol("multiply", " * ");
inputSymbol("subtract", " - ");
inputSymbol("add", " + ");
inputSymbol("equals", " = ");
inputSymbol("decimal", ".");
