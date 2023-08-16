//step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2
    const withdrawField=document.getElementById('withdraw-field');
    if(isNaN(withdrawField.value)){
        alert('Please enter a valid number');
        withdrawField.value='';
        return;
    }
    const newWithdrawAmount=withdrawField.value;
    const withdrawAmount=parseFloat(newWithdrawAmount);
    //step-3
    const withdrawTotal=document.getElementById('withdraw-total');
    const preWithdrawAmount=withdrawTotal.innerText;
    const preWithdrawTotal=parseFloat(preWithdrawAmount);

    withdrawField.value='';

    //step-5
    const balanceTotal=document.getElementById('balance-total');
    const preBalanceTotal=balanceTotal.innerText;
    const preBalanceTotalAmount=parseFloat(preBalanceTotal);
    if(withdrawAmount>preBalanceTotalAmount){
        alert('You have not enough balance');
        return;
    }
    //step-4
    const newWithdrawTotal=preWithdrawTotal+withdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal; 

    const newBalanceTotal=preBalanceTotalAmount-withdrawAmount;
    balanceTotal.innerText=newBalanceTotal;
    

    
});