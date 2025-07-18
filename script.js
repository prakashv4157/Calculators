let billItems = [];
let total = 0;

function addBillItem() {
  const name = document.getElementById("itemName").value;
  const qty = parseInt(document.getElementById("itemQty").value);
  const price = parseFloat(document.getElementById("itemPrice").value);

  if (!name || isNaN(qty) || isNaN(price)) {
    alert("Please enter valid item details");
    return;
  }

  const amount = qty * price;
  billItems.push({ name, qty, price, amount });
  total += amount;
  updateBillUI();
}

function updateBillUI() {
  const billList = document.getElementById("billList");
  billList.innerHTML = '';
  billItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.qty} x Rs.${item.price} = Rs.${item.amount}`;
    billList.appendChild(li);
  });

  document.getElementById("billTotal").innerText = total.toFixed(2);
}

function printBill() {
  const shop = document.getElementById("shopName").value || "My Shop";
  const address = document.getElementById("shopAddress").value || "Address";

  let printContent = `🧾 ${shop}\n${address}\n\n`;
  billItems.forEach(item => {
    printContent += `${item.name} - ${item.qty} x ${item.price} = Rs.${item.amount}\n`;
  });
  printContent += `\nTotal: Rs.${total.toFixed(2)}`;

  const win = window.open('', '', 'width=400,height=600');
  win.document.write(`<pre>${printContent}</pre>`);
  win.print();
  win.close();

  saveToHistory(printContent);
  billItems = [];
  total = 0;
  updateBillUI();
}
let billItems = [];
let total = 0;

function addBillItem() {
  const name = document.getElementById("itemName").value;
  const qty = parseInt(document.getElementById("itemQty").value);
  const price = parseFloat(document.getElementById("itemPrice").value);

  if (!name || isNaN(qty) || isNaN(price)) {
    alert("Please enter valid item details");
    return;
  }

  const amount = qty * price;
  billItems.push({ name, qty, price, amount });
  total += amount;
  updateBillUI();
}

function updateBillUI() {
  const billList = document.getElementById("billList");
  billList.innerHTML = '';
  billItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.qty} x Rs.${item.price} = Rs.${item.amount}`;
    billList.appendChild(li);
  });

  document.getElementById("billTotal").innerText = total.toFixed(2);
}

function printBill() {
  const shop = document.getElementById("shopName").value || "My Shop";
  const address = document.getElementById("shopAddress").value || "Address";

  let printContent = `🧾 ${shop}\n${address}\n\n`;
  billItems.forEach(item => {
    printContent += `${item.name} - ${item.qty} x ${item.price} = Rs.${item.amount}\n`;
  });
  printContent += `\nTotal: Rs.${total.toFixed(2)}`;

  const win = window.open('', '', 'width=400,height=600');
  win.document.write(`<pre>${printContent}</pre>`);
  win.print();
  win.close();

  saveToHistory(printContent);
  billItems = [];
  total = 0;
  updateBillUI();
}

function saveToHistory(data) {
  const li = document.createElement('li');
  li.textContent = data.split('\n')[0] + " - Total: " + data.match(/Total: Rs\.\d+/)[0];
  document.getElementById("historyList").appendChild(li);
}

function saveToHistory(data) {
  const li = document.createElement('li');
  li.textContent = data.split('\n')[0] + " - Total: " + data.match(/Total: Rs\.\d+/)[0];
  document.getElementById("historyList").appendChild(li);
}
