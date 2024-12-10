function floodDonationAmount(id){
    const value = document.getElementById(id).value;
    const floodAmount = parseFloat(value);
    return floodAmount;
}
function floodDonationTotalAmount(id){
    const value = document.getElementById(id).innerText;
    const floodAmount = parseFloat(value);
    return floodAmount;
}
function showDonationPage(id){
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

