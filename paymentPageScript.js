const ErrorMessageEl = document.querySelector('#errorMessage')
const submitBTN = document.querySelector('.submitBtn')
const thankYouCon = document.querySelector('.thank-you-pop-container')
const formField = document.querySelector('#myForm')
const overLay = document.querySelector('.over-lay')
const priceValue = document.querySelector('#Quantity-of-item-inputField')



formField.addEventListener('submit', function(e) {
    e.preventDefault()

    if (validateForm()) {
        thankYouCon.style.display = 'block'
        overLay.style.display = 'block'

    }

});







function validateForm() {
    let form = formField
    let inputs = form.querySelectorAll('input[required]')

    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value.trim() === '') {
            return false
        }
    }

    return true;
}









let urlParams = new URLSearchParams(window.location.search);
let imageSrc = urlParams.get('imageSrc')
let text = urlParams.get('text')
let additionalText = urlParams.get('additionalText')
let additionalprice = urlParams.get('additionalPrice')


let relativeImg = document.getElementById('deliveryImg')
let relativeText = document.getElementById('deliveryText');
let relativeAdditonalText = document.getElementById('deliveryExtraText')
let relativeAdditonalPrice = document.getElementById('deliveryPrice')
relativeImg.src = imageSrc;
relativeText.textContent = text
relativeAdditonalText.textContent = additionalText
relativeAdditonalPrice.textContent = additionalprice