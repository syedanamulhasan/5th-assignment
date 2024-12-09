document.getElementById('noakhali-flood-donation').addEventListener('click',function(event){
    event.preventDefault();
    const amount = floodDonationAmount('flood-donation-amount');
    const totalAmount = floodDonationTotalAmount('total-flood-donation');
    const reducedAmount = floodDonationTotalAmount('reduced-amount');
    const newReducedAmount = reducedAmount - amount;
    
    if(amount <= 0 || newReducedAmount <=0 || isNaN(amount)){
        alert('failed to donate');
        
        return modal;
        
    }
    else{
        document.getElementById('total-flood-donation').innerText =  amount + totalAmount +" " + "BDT";
        document.getElementById('reduced-amount').innerText = newReducedAmount +" " + "BDT";
        // const modal = document.getElementById('my_modal_1');
        // modal.classList.remove("hidden")
    }

    const text = document.getElementById('flood-text').innerText;
    const div= document.createElement('div');
    div.classList.add (
        "border-2",
        "rounded-lg",
        "p-2"
    );
    div.innerHTML = `
    <p class="text-xl font-semibold">${amount} is donated ${text}</p>
    <p>${new Date()}</p>
    `
    document.getElementById('history-page').appendChild(div)
    
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

    const text = document.getElementById('flood-text').innerText;
    const div= document.createElement('div');
    div.innerHTML = `
    <p class="text-xl font-semibold">${amount} is donated ${text}</p>
    <p>Date : <time datetime="2008-02-14 20:00">Bangladesh standard time</time></p>
    `
    
    document.getElementById('history-page').appendChild(div)
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