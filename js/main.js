var elForm = document.querySelector("[data-money-form]");
var elMoney = document.querySelector("[data-input-amount]");
var elCurrency = document.querySelector("[data-select-currency]");
var elCalculatedMoney = document.querySelector("[data-text-calculated-money]");

var ONE_USD = 10925;
var ONE_RUBL = 175;
var ONE_EURO = 11211;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var moneyAmount = +elMoney.value;
  var currecy = elCurrency.value;
  var calculatedMoney;

  console.log(moneyAmount, currecy);

  if (currecy === "USD") {
    calculatedMoney = moneyAmount / ONE_USD;
  }
  if (currecy === "RUBL") {
    calculatedMoney = moneyAmount / ONE_RUBL;
  }
  if (currecy === "EURO") {
    calculatedMoney = moneyAmount / ONE_EURO;
  }

  console.log(calculatedMoney);
  elCalculatedMoney.textContent = `${calculatedMoney.toFixed(2)} ${currecy}`;
});
