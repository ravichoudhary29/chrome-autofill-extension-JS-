chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    try {
        ;(document.getElementById('TextField7').value = request.name),
            (document.getElementById('email').value = request.email),
            (document.getElementById('TextField5').value = request.telephone),
            (document.getElementById('TextField9').value = request.address1),
            (document.getElementById('Select1').value = request.city),
            (document.getElementById('TextField8').value = request.address2),
            (document.getElementById('postalCode').value = request.postcode),
            (document.getElementById('number').value = request.cardNumber),
            (document.getElementById('verification_value').value = request.cvv),
            (document.getElementById('name').value = request.name)
        sendResponse({ status: 'Success!' })
    } catch (error) {
        console.log(error)
        sendResponse({ status: 'Exception occured!' })
    }
})
