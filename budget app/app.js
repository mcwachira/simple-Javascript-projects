const expenseName = document.getElementById("expenseName");

const expenseAmount = document.getElementById("expenseAmount");

const addExpense = document.getElementById("addExpense");

const budgetList = document.getElementById("list");

const budgetValue = document.getElementById("budgetValue");

const budgetLeft = document.getElementById("budgetLeft");
const expensesList = document.getElementById("expensesList");

// window.addEventListener("load", (e) => {
//   alert("the page is fully loaded");
// });

let budget = window.prompt("Enter your budget for the week ?");
localStorage.setItem("budget", JSON.parse(budget));
console.log(budget);
// if (Number.isInteger(budget)) {
//   localStorage.setItem("budget", JSON.parse(budget));
//   console.log(budget);
// `;
// }
let me = parseFloat(expenseAmount.value);
let exp = parseFloat(budget) - 0;

// console.log(me);
// console.log(expenseAmount.value);
budgetValue.value = `Budget: $ ${budget}`;
console.log(exp);

addExpense.addEventListener("click", (e) => {
  // console.log(e.target.value);
  const expense = document.createElement("p");
  expense.classList.add("expenseStyle");
  expense.textContent = `${expenseName.value}`;
  const value = document.createElement("p");

  value.classList.add("expenseValue");
  value.textContent = `$ ${expenseAmount.value}`;
  expense.appendChild(value);

  expensesList.appendChild(expense);
  budgetLeft.value = `Left:$ ${exp - expenseAmount.value}`;
});
