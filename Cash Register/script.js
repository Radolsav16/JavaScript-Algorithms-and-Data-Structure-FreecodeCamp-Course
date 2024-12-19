let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const displayChangeDue = document.getElementById('change-due');
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');



const resultStrFormatter = (status, change) => {
  displayChangeDue.textContent = `Status: ${status}`;
  displayChangeDue.textContent += change
    .map(
      ([denominationName, amount]) => ` ${denominationName}: $${amount}`
    )
    .join('');
};

const checkCashRegister = cash => {
  const cashInCents = Math.round(Number(cash.value) * 100);
  const priceInCents = Math.round(price * 100);
 
  if (cashInCents < priceInCents) {
    alert('Customer does not have enough money to purchase the item');
    cashInput.value = '';
    return;
  }

  if (cashInCents === priceInCents) {
    displayChangeDue.textContent ='No change due - customer paid with exact cash';
    cashInput.value = '';
    return;
  }

  let changeDue = cashInCents - priceInCents;
  const reversedCid = [...cid]
    .reverse()
    .map(([denominationName, amount]) => [
      denominationName,
      Math.round(amount * 100)
    ]);
  const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  const result = { status: 'OPEN', change: [] };

  const totalCID = reversedCid.reduce((prev, [_, amount]) => prev + amount, 0);

  if (totalCID < changeDue) {
    displayChangeDue.textContent= 'Status: INSUFFICIENT_FUNDS';
    return;
  }

  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      const [denominationName, total] = reversedCid[i];
      const possibleChange = Math.min(total, changeDue);
      const count = Math.floor(possibleChange / denominations[i]);
      const amountInChange = count * denominations[i];
      changeDue -= amountInChange;

      if (count > 0) {
        result.change.push([denominationName, amountInChange / 100]);
      }
    }
  }
  if (changeDue > 0) {
    displayChangeDue.textContent = 'Status: INSUFFICIENT_FUNDS';
    return;
  }

  resultStrFormatter(result.status, result.change);
};

const checkResults = () => {
  if (!cashInput.value) {
    return;
  }
  checkCashRegister(cashInput.value);
};

purchaseBtn.addEventListener('click', checkResults);

