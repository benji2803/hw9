// CIT 384 - Homework 9: JavaScript Built-In Objects

// ==========================
// Part 1: Date Display
// ==========================
// Date gets today's date from the visitor's browser.
const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const year = today.getFullYear();
const dateMessage = `Today is ${month}/${day}/${year}`;
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================
// Use separate variables and statements (no arrays or loops).
const originalOne = "36";
const originalTwo = "12.50";
const originalThree = "banana";
const originalFour = "250";

// Number() attempts to convert each string to a number.
const numberOne = Number(originalOne);
const numberTwo = Number(originalTwo);
const numberThree = Number(originalThree);
const numberFour = Number(originalFour);

// Check whether each converted value is NaN or an integer.
const isNaNOne = Number.isNaN(numberOne);
const isNaNTwo = Number.isNaN(numberTwo);
const isNaNThree = Number.isNaN(numberThree);
const isNaNFour = Number.isNaN(numberFour);
const isIntegerOne = Number.isInteger(numberOne);
const isIntegerTwo = Number.isInteger(numberTwo);
const isIntegerThree = Number.isInteger(numberThree);
const isIntegerFour = Number.isInteger(numberFour);

// Create a separate display statement for each value.
const resultOne = `Original: "${originalOne}" → Converted: ${numberOne} → isNaN: ${isNaNOne} → isInteger: ${isIntegerOne}`;
const resultTwo = `Original: "${originalTwo}" → Converted: ${numberTwo} → isNaN: ${isNaNTwo} → isInteger: ${isIntegerTwo}`;
const resultThree = `Original: "${originalThree}" → Converted: ${numberThree} → isNaN: ${isNaNThree} → isInteger: ${isIntegerThree}`;
const resultFour = `Original: "${originalFour}" → Converted: ${numberFour} → isNaN: ${isNaNFour} → isInteger: ${isIntegerFour}`;

// First if/else: explain the non-numeric conversion.
let validationMessage;
if (Number.isNaN(numberThree)) {
  validationMessage = "The word banana is not a valid number.";
} else {
  validationMessage = "The word banana can be converted to a number.";
}

// Second if/else: explain the decimal conversion.
let integerMessage;
if (Number.isInteger(numberTwo)) {
  integerMessage = "12.50 is an integer.";
} else {
  integerMessage = "12.50 is not an integer because it has a decimal part.";
}

// Show the four results as a list and display both conditional messages.
// textContent is used for values so the browser displays them as plain text.
const conversionOutput = document.getElementById("numberConversionOutput");
const resultsList = document.createElement("ul");
resultsList.className = "results";

const itemOne = document.createElement("li");
itemOne.textContent = resultOne;
resultsList.appendChild(itemOne);
const itemTwo = document.createElement("li");
itemTwo.textContent = resultTwo;
resultsList.appendChild(itemTwo);
const itemThree = document.createElement("li");
itemThree.textContent = resultThree;
resultsList.appendChild(itemThree);
const itemFour = document.createElement("li");
itemFour.textContent = resultFour;
resultsList.appendChild(itemFour);
conversionOutput.replaceChildren(resultsList);

const conversionMessage = document.createElement("p");
conversionMessage.className = "message";
conversionMessage.textContent = `${validationMessage} ${integerMessage}`;
conversionOutput.appendChild(conversionMessage);

// ==========================
// Part 3: Math and Formatting
// ==========================
// A small price calculator with three numeric values.
const itemPrice = 24.99;
const shippingCost = 5.50;
const taxRate = 0.095;
const subtotal = itemPrice + shippingCost; // Addition
const taxAmount = itemPrice * taxRate;      // Multiplication
const total = subtotal + taxAmount;         // Addition
const budget = 40;
const remainingBudget = budget - total;     // Subtraction

// toFixed(2) displays money with exactly two decimal places.
const mathOutput = document.getElementById("mathOutput");
mathOutput.innerHTML =
  `<p>Item price: $${itemPrice.toFixed(2)}</p>` +
  `<p>Shipping: $${shippingCost.toFixed(2)}</p>` +
  `<p>Tax rate: ${(taxRate * 100).toFixed(1)}%</p>` +
  `<p>Subtotal: $${subtotal.toFixed(2)}</p>` +
  `<p>Tax on item: $${taxAmount.toFixed(2)}</p>` +
  `<p><strong>Total: $${total.toFixed(2)}</strong></p>` +
  `<p>Money left from a $${budget.toFixed(2)} budget: $${remainingBudget.toFixed(2)}</p>`;
