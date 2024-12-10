document.getElementById('show-donation-page').addEventListener('click',function(event){
    showDonationPage('donation-page')
})
// document.getElementById('show-donation-history').addEventListener('click',function(event){
//     showDonationPage('history-page');
// })
const historyPage = document.getElementById('show-donation-history');
const donationPage = document.getElementById('show-donation-page');
historyPage.addEventListener('click',function(){
    showDonationPage('history-page');
    historyPage.classList.add(
        "bg-[#a3e635]"
    )
    donationPage.classList.remove(
        "bg-[#a3e635]"
    )
})

donationPage.addEventListener('click',function(){
    showDonationPage('donation-page');
    donationPage.classList.add(
        "bg-[#a3e635]"
    )
    historyPage.classList.remove(
        "bg-[#a3e635]"
    )
})