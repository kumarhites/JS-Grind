const transactions = [
  { id: 1, type: "income", amount: 5000 },
  { id: 2, type: "expense", amount: 1200 },
  { id: 3, type: "expense", amount: 800 },
  { id: 4, type: "income", amount: 2000 },
  { id: 5, type: "expense", amount: 300 },
];

const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");
const listEl = document.getElementById("list");

// TODO: calculate totals using reduce
const income = transactions.reduce(
  (acc, curr) => (curr.type === "income" ? acc + curr.amount : acc),
  0
);
const expense = transactions.reduce(
  (acc, curr) => (curr.type === "expense" ? acc + curr.amount : acc),
  0
);
const balance = income - expense;
// TODO: render values
incomeEl.innerText = income;
expenseEl.innerText = expense;
balanceEl.innerText = balance;
// TODO: render list using map
const listItems = transactions.map((ele) => {
    const sign = ele.type === "income" ? "+" : "-";
    const color = ele.type === "income" ? "green" : "red";
 return `<li>
    ${ele.type}: <span style="color: ${color}">${sign} ${ele.amount}</span>
  </li>`
});
const listHTML = listItems.join("");
listEl.innerHTML = listHTML;
