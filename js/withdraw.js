/* 
1. add withdraw button event handler
2. get withdraw amount by using  document.getElementById function
3. get previous withdraw amount by using document.getElementById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using document.getElementById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById('btn-withdraw').addEventListener('click', function () {
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');
  // console.log('newWithdrawAmount :>> ', newWithdrawAmount);
  const previousWithdrawTotal = getTextElementValueById('withdraw-total');
  // console.log('previousWithdrawTotal :>> ', previousWithdrawTotal);
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  // console.log('newWithdrawTotal :>> ', newWithdrawTotal);
  if (newWithdrawTotal < 0 || isNaN(newWithdrawTotal)) {
    alert(' enter positive or right number ');
  } else {
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if (newWithdrawTotal < 0 || isNaN(newWithdrawTotal)) {
      alert('Balance is low');
    } else {
      if (previousBalanceTotal < newWithdrawTotal) {
        alert('balance short');
      } else {
        setTextElementValueById('withdraw-total', newWithdrawTotal);
        // console.log('previousBalanceTotal :>> ', previousBalanceTotal);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        setTextElementValueById('balance-total', newBalanceTotal);
      }
    }
  }
});
