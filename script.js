'use strict';

const allItems = document.querySelectorAll('.items')
const popUpComponent = document.querySelector('.pop-up-component')
const closePopBtn = document.querySelector('.close-pop')
const overLay = document.querySelector('.over-lay')
const popUpImg = document.getElementById('popImg')
const popUpTexts = document.getElementById('productDetails')
const popUpPrice = document.getElementById("productPrice")
const popUpExtraDetails = document.getElementById('productExtraDetails')
const showMoreBtn = document.querySelector('.show-more-link')
const forthItemCol = document.querySelector('.fourth-row ')
const BuyNowBTN = document.querySelector('.buyNowBtn')
const deliveryImg = document.getElementById('delivery-img')
const openSideBar = document.querySelector('.hamburger')
const closeSideBar = document.querySelector('.close-sidebar')
const sidebarComponent = document.querySelector('.sidebar-section')



const openPop = function() {
    popUpComponent.style.display = 'block'
    overLay.style.display = 'block'
}

const closePopx = function() {
    popUpComponent.style.display = 'none'
    overLay.style.display = 'none'

}
const openShowMoreBtn = function() {
    if (forthItemCol.style.display === 'none') {
        forthItemCol.style.display = 'grid'
        showMoreBtn.style.display = 'none'
    } else {
        forthItemCol.style.display = 'none'

    }

}

openSideBar.addEventListener('click', function() {

    sidebarComponent.style.display = 'block'


})

closeSideBar.addEventListener('click', function() {
    sidebarComponent.style.display = 'none'
})



showMoreBtn.addEventListener('click', openShowMoreBtn)


for (let i = 0; i < allItems.length; i++) {
    allItems[i].addEventListener('click', openPop)

    allItems[i].addEventListener('click', function() {
        let img = this.querySelector('img').src;
        let txt = this.querySelector('#items-details').textContent;
        let price = this.querySelector('#items-price').textContent;
        let extraDetails = this.querySelector('#extra-items-details').textContent;
        popUpExtraDetails.textContent = extraDetails
        popUpPrice.textContent = price;
        popUpTexts.textContent = txt;
        popUpImg.src = img;



    })



    closePopBtn.addEventListener('click', closePopx)
    overLay.addEventListener('click', closePopx)

}


BuyNowBTN.addEventListener('click', function() {
    // remov.classList.remove('hidden')
    let currentImgSrc = popUpImg.src;
    let currentText = popUpTexts.textContent
    let currentAdditionalText = popUpExtraDetails.textContent
    let currentPrice = popUpPrice.textContent
    window.open('paymentPage.html?imageSrc=' + encodeURIComponent(currentImgSrc) + '&text=' + encodeURIComponent(currentText) + '&additionalText=' + encodeURIComponent(currentAdditionalText) + '&additionalPrice=' + encodeURIComponent(currentPrice), '_blank');
})