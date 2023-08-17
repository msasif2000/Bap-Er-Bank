//alada file theke akta common file e function call korte hbe

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount=getInputFieldValueById('withdraw-field');
    const preWithdrawTotal=getTextElementValueByID('withdraw-total');
    const newWithdrawTotal=preWithdrawTotal+newWithdrawAmount;
    setTextElementValueByID('withdraw-total', newWithdrawTotal);
    const preBalanceTotal=getTextElementValueByID('balance-total');
    const newBalanceTotal=preBalanceTotal-newWithdrawAmount;
    setTextElementValueByID('balance-total', newBalanceTotal);
});