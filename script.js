
// ==========================================
// Ben's Homelab - System Diagnostics
// CIT 384 - Homework 9
// ==========================================

// PART 1: DATE DISPLAY

// Create a Date object for today's date.
let currentDate = new Date();

// Get the month, day, and year.
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let year = currentDate.getFullYear();

// Add leading zeros to single-digit values.
month = String(month).padStart(2, "0");
day = String(day).padStart(2, "0");

// Display the formatted date on the webpage.
let dateMessage = "Today is " + month + "/" + day + "/" + year;

document.getElementById("dateOutput").textContent = dateMessage;


// ==========================================
// PART 2: NUMBER CONVERSION AND VALIDATION
// ==========================================

// Four separate simulated server configuration values.
let ramValue = "16";
let storageValue = "62.5";
let serverStatus = "offline";
let networkSpeed = "1000";

// Convert each string using Number().
let convertedRam = Number(ramValue);
let convertedStorage = Number(storageValue);
let convertedStatus = Number(serverStatus);
let convertedSpeed = Number(networkSpeed);

// Check whether each result is NaN.
let ramIsNaN = Number.isNaN(convertedRam);
let storageIsNaN = Number.isNaN(convertedStorage);
let statusIsNaN = Number.isNaN(convertedStatus);
let speedIsNaN = Number.isNaN(convertedSpeed);

// Check whether each result is an integer.
let ramIsInteger = Number.isInteger(convertedRam);
let storageIsInteger = Number.isInteger(convertedStorage);
let statusIsInteger = Number.isInteger(convertedStatus);
let speedIsInteger = Number.isInteger(convertedSpeed);

// Build a separate result for each value.
// No arrays or loops are used.

let ramResult =
    "<p>RAM Configuration: Original: \"" + ramValue +
    "\" | Converted: " + convertedRam +
    " | isNaN: " + ramIsNaN +
    " | isInteger: " + ramIsInteger + "</p>";

let storageResult =
    "<p>Storage Usage: Original: \"" + storageValue +
    "\" | Converted: " + convertedStorage +
    " | isNaN: " + storageIsNaN +
    " | isInteger: " + storageIsInteger + "</p>";

let statusResult =
    "<p>Server Status: Original: \"" + serverStatus +
    "\" | Converted: " + convertedStatus +
    " | isNaN: " + statusIsNaN +
    " | isInteger: " + statusIsInteger + "</p>";

let speedResult =
    "<p>Network Speed: Original: \"" + networkSpeed +
    "\" | Converted: " + convertedSpeed +
    " | isNaN: " + speedIsNaN +
    " | isInteger: " + speedIsInteger + "</p>";


// ==========================================
// PART 4: CONDITIONAL STATEMENTS
// ==========================================

// First if/else: Check for an invalid number.
let validationMessage = "";

if (Number.isNaN(convertedStatus)) {
    validationMessage =
        "<p class='warning'>WARNING: Server status is not a valid number.</p>";
} else {
    validationMessage =
        "<p class='success'>Server status is a valid number.</p>";
}

// Second if/else: Check whether RAM is an integer.
let integerMessage = "";

if (Number.isInteger(convertedRam)) {
    integerMessage =
        "<p class='success'>RAM configuration is a whole number.</p>";
} else {
    integerMessage =
        "<p class='warning'>RAM configuration is not a whole number.</p>";
}

// Combine and display all conversion results.
let conversionResults =
    ramResult +
    storageResult +
    statusResult +
    speedResult +
    validationMessage +
    integerMessage;

document.getElementById("numberConversionOutput").innerHTML =
    conversionResults;


// ==========================================
// PART 3: MATH AND NUMBER FORMATTING
// ==========================================

// Simulated homelab resource values.
let totalStorage = 1000;
let usedStorage = 625;
let reservedStorage = 50;

// Subtraction: Calculate available storage.
let availableStorage = totalStorage - usedStorage;

// Addition: Calculate used and reserved storage.
let allocatedStorage = usedStorage + reservedStorage;

// Division and multiplication: Calculate usage percentage.
let usagePercentage = (usedStorage / totalStorage) * 100;

// Format numeric results to two decimal places.
let formattedUsage = usagePercentage.toFixed(2);
let formattedAvailable = availableStorage.toFixed(2);

// Build the math results.
let mathResults =
    "<p>Total Storage: " + totalStorage + " GB</p>" +
    "<p>Used Storage: " + usedStorage + " GB</p>" +
    "<p>Reserved Storage: " + reservedStorage + " GB</p>" +
    "<p>Allocated Storage: " + allocatedStorage + " GB</p>" +
    "<p>Available Storage: " + formattedAvailable + " GB</p>" +
    "<p>Storage Usage: " + formattedUsage + "%</p>";

// Third if/else: Check resource usage.
if (usagePercentage >= 80) {
    mathResults +=
        "<p class='warning'>WARNING: Storage usage is high.</p>";
} else {
    mathResults +=
        "<p class='success'>Storage usage is within normal limits.</p>";
}

// Display the math results on the webpage.
document.getElementById("mathOutput").innerHTML = mathResults;
