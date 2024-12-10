document.getElementById('noakhali-flood-donation').addEventListener('click',function(event){
    event.preventDefault();
    const amount = floodDonationAmount('flood-donation-amount');
    const totalAmount = floodDonationTotalAmount('total-flood-donation');
    const reducedAmount = floodDonationTotalAmount('reduced-amount');
    const newReducedAmount = reducedAmount - amount;
    if(amount <= 0 || newReducedAmount <=0 || isNaN(amount)){
        // document.getElementById('noakhali-flood-donation').onclick = null;
        
        alert('failed to donate');
        return
              
    }
    else{
        document.getElementById('total-flood-donation').innerText =  amount + totalAmount +" " + "BDT";
        document.getElementById('reduced-amount').innerText = newReducedAmount +" " + "BDT";
        const modal = document.getElementById('my_modal_1');
        modal.classList.remove('hidden');
        // modal.classList.remove("hidden")
        const text = document.getElementById('flood-text').innerText;
        const div= document.createElement('div');
        div.classList.add ("border-2","rounded-lg","p-2");
        div.innerHTML = `
        <p class="text-xl font-semibold ml-3">${amount} is donated ${text}</p>
        <p class="bg-[#f3f4f6] rounded-lg p-2 my-4 ml-2">${new Date()}</p>
        `
        document.getElementById('history-page').appendChild(div); 
    }
    
    
})
//2
document.getElementById('feni-flood-donation').addEventListener('click',function(event){
    event.preventDefault();
    const feniAmount = floodDonationAmount('feni-flood-donation-amount');
    const feniTotalAmount = floodDonationTotalAmount('feni-total-amount');
    const reducedAmount = floodDonationTotalAmount('reduced-amount');
    const newReducedAmount = reducedAmount - feniAmount;
    
    if(feniAmount <= 0 || newReducedAmount <=0 || isNaN(feniAmount)){
        alert('failed to donate');
              
    }
    else{
        document.getElementById('feni-total-amount').innerText =  feniAmount + feniTotalAmount +" " + "BDT";
        document.getElementById('reduced-amount').innerText = newReducedAmount +" " + "BDT";
        // const modal = document.getElementById('my_modal_1');
        // modal.classList.remove("hidden")
        const feniText = document.getElementById('feni-flood').innerText;
        const div= document.createElement('div');
        div.classList.add ("border-2","rounded-lg","p-2");
        div.innerHTML = `
        <p class="text-xl font-semibold ml-3">${feniAmount} is donated ${feniText}</p>
        <p class="bg-[#f3f4f6] rounded-lg p-2 my-4 ml-2">${new Date()}</p>
        `
        document.getElementById('history-page').appendChild(div); 
    }
    

    
})
//3
document.getElementById('quota-protest-donation').addEventListener('click',function(event){
    event.preventDefault();
    const quotaAmount = floodDonationAmount('quota-protest-amount');
    const totalQuotaAmount = floodDonationTotalAmount('total-quota-protest-amount');
    const reducedAmount = floodDonationTotalAmount('reduced-amount');
    const newReducedAmount = reducedAmount - quotaAmount;
    if(quotaAmount <= 0 || newReducedAmount <=0 || isNaN(quotaAmount)){
        alert('failed to donate');
              return;
    }
    else{
        document.getElementById('total-quota-protest-amount').innerText =  quotaAmount + totalQuotaAmount +" " + "BDT";
        document.getElementById('reduced-amount').innerText = newReducedAmount +" " + "BDT";
        
        
        const quotaText = document.getElementById('quota-text').innerText;
        const div= document.createElement('div');
        div.classList.add ("border-2","rounded-lg","p-2");
        div.innerHTML = `
        <p class="text-xl font-semibold ml-3">${quotaAmount} is donated ${quotaText}</p>
        <p class="bg-[#f3f4f6] rounded-lg p-2 my-4 ml-2">${new Date()}</p>
        `
        document.getElementById('history-page').appendChild(div); 
    }
   

})