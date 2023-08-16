//step-1: add Event Listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2: get the amount deposited from input field
    const depositField= document.getElementById('deposit-field');
    const newDepositAmount= depositField.value;

    //step-3: current deposit amount
    const depositTotalAmount= document.getElementById('deposit-total');
    const preDepositTotal= depositTotalAmount.innerText;
    //step-4: add number
    const currentDepositTotal= parseFloat(preDepositTotal) + parseFloat(newDepositAmount);
    depositTotalAmount.innerText=currentDepositTotal;

    //step-5: update account balance
    const balanceTotalAmount=document.getElementById('balance-total');
    const preBalanceTotal= balanceTotalAmount.innerText;
    const currentBalanceTotal= parseFloat(preBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotalAmount.innerText=currentBalanceTotal;
    depositField.value='';
});