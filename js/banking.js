document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value; //Input deposit amount

    const depositTotal = document.getElementById('deposit-total');
    const currentDepositAmount = depositTotal.innerText; 
    const newDepositTotal = parseFloat(currentDepositAmount) + parseFloat(depositAmount);
    depositTotal.innerText = newDepositTotal;
    depositInput.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText) + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceTotal;
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawAmount = withdrawTotal.innerText; 
    const newWithdrawTotal = parseFloat(currentWithdrawAmount) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;
    withdrawInput.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText) - parseFloat(withdrawAmount);
    balanceTotal.innerText = newBalanceTotal;
})