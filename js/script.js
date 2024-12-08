document.getElementById('noakhali-flood-donation').addEventListener('click',function(event){
    event.preventDefault();
    const amount = floodDonationAmount('flood-donation-amount');
    const totalAmount = floodDonationTotalAmount('total-flood-donation');
    
    if(isNaN(amount)){
        alert('failed to donate');
        return;
    }
    if(amount < 0){
        alert('failed to donate');
        return;
    }
    else{
        document.getElementById('total-flood-donation').innerText =  amount + totalAmount +" " + "BDT";
    }

    const reducedAmount = floodDonationTotalAmount('reduced-amount');
    const newReducedAmount = reducedAmount - amount +" " + "BDT";
    document.getElementById('reduced-amount').innerText = newReducedAmount;
})

document.getElementById('feni-flood-donation').addEventListener('click',function(event){
    event.preventDefault();
    const feniAmount = floodDonationAmount('feni-flood-donation-amount');
    const feniTotalAmount = floodDonationTotalAmount('feni-total-amount');
    if(isNaN(feniAmount)){
        alert('failed to donate');
        return;
    }
    if(feniAmount < 0){
        alert('failed to donate');
        return;
    }
    else{
        document.getElementById('feni-total-amount').innerText =  feniAmount + feniTotalAmount +" " + "BDT";
    }
    const reducedAmount = floodDonationTotalAmount('reduced-amount');
    const newReducedAmount = reducedAmount - feniAmount + " " + "BDT";
    document.getElementById('reduced-amount').innerText = newReducedAmount;
})

document.getElementById('quota-protest-donation').addEventListener('click',function(event){
    event.preventDefault();
    const quotaAmount = floodDonationAmount('quota-protest-amount');
    const totalQuotaAmount = floodDonationTotalAmount('total-quota-protest-amount');
    if(isNaN(quotaAmount)){
        alert('failed to donate');
        return;
    }
    if(quotaAmount < 0){
        alert('failed to donate');
        return;
    }
    else{
        document.getElementById('total-quota-protest-amount').innerText =  quotaAmount + totalQuotaAmount +" " + "BDT";
    }
    const reducedAmount = floodDonationTotalAmount('reduced-amount');
    const newReducedAmount = reducedAmount - quotaAmount + " " + "BDT";
    document.getElementById('reduced-amount').innerText = newReducedAmount;

})