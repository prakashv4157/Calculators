// Basic Calculator Functions
function appendValue(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    alert("Invalid Expression");
  }
}

// Loan Calculator Function
function calculateLoan() {
  let amount = parseFloat(document.getElementById("loanAmount").value);
  let interest = parseFloat(document.getElementById("interestRate").value);
  let years = parseInt(document.getElementById("loanYears").value);

  if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
    alert("Please fill all fields correctly.");
    return;
  }

  let monthlyRate = interest / 100 / 12;
  let payments = years * 12;

  let x = Math.pow(1 + monthlyRate, payments);
  let monthly = (amount * x * monthlyRate) / (x - 1);

  if (isFinite(monthly)) {
    document.getElementById("loanResult").innerText =
      "Monthly Payment: Rs. " + monthly.toFixed(2);
  } else {
    document.getElementById("loanResult").innerText = "Invalid data!";
  }
}
