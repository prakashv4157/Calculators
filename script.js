// Simple Calculator
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

// Loan Calculator with Chart
let emiChart = null;

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

  if (!isFinite(monthly)) {
    document.getElementById("loanResult").innerText = "Invalid data!";
    return;
  }

  let totalPayment = monthly * payments;
  let totalInterest = totalPayment - amount;

  document.getElementById("loanResult").innerText =
    `Monthly Payment: Rs. ${monthly.toFixed(2)}\nTotal Interest: Rs. ${totalInterest.toFixed(2)}`;

  // Render Chart
  renderEMIChart(amount, totalInterest, totalPayment);
}

function renderEMIChart(principal, interest, total) {
  const ctx = document.getElementById('emiChart').getContext('2d');

  if (emiChart) emiChart.destroy(); // clear existing

  emiChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Principal', 'Interest', 'Total Payment'],
      datasets: [{
        label: 'Amount (Rs)',
        data: [principal, interest, total],
        backgroundColor: ['#42a5f5', '#ef5350', '#66bb6a']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      }
    }
  });
}

// PDF Download using jsPDF
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let amount = document.getElementById("loanAmount").value;
  let rate = document.getElementById("interestRate").value;
  let years = document.getElementById("loanYears").value;
  let result = document.getElementById("loanResult").innerText;

  doc.setFontSize(18);
  doc.text("Loan EMI Summary", 20, 20);

  doc.setFontSize(12);
  doc.text(`Loan Amount: Rs. ${amount}`, 20, 40);
  doc.text(`Interest Rate: ${rate}%`, 20, 50);
  doc.text(`Loan Term: ${years} years`, 20, 60);
  doc.text(result, 20, 80);

  doc.save("Loan-EMI-Summary.pdf");
}
