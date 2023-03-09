// DRY ---> Do Not Repeat Yourself
document.getElementById('btn-deposit').addEventListener('click', () => {
  const previousDepositTotal = getTextElementValueById('deposit-total');
  const newDepositAmount = getInputFieldValueById('deposit-field');
  if (newDepositAmount < 0 || isNaN(newDepositAmount)) {
    alert('enter positive number');
  } else {
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set newDepositTotal
    setTextElementValueById('deposit-total', newDepositTotal);
    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('balance-total', newBalanceTotal);
  }
});
