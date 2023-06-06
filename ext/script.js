document.getElementById('autofill').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                telephone: document.getElementById('tele').value,
                address1: document.getElementById('address_1').value,
                address2: document.getElementById('address_2').value,
                address3: document.getElementById('address_3').value,
                city: document.getElementById('city').value,
                postcode: document.getElementById('postcode').value,
                country: document.getElementById('country').value,
                cardnumber: document.getElementById('card_number').value,
                month: document.getElementById('card_month').value,
                year: document.getElementById('card_year').value,
                // cvv: document.getElementById('card_cvv').value,
            },
            function (response) {
                console.log(response)
            }
        )
    })
})

document.getElementById('save').addEventListener('click', () => {
    chrome.storage.sync.set(
        {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('tele').value,
            address1: document.getElementById('address_1').value,
            address2: document.getElementById('address_2').value,
            address3: document.getElementById('address_3').value,
            city: document.getElementById('city').value,
            postcode: document.getElementById('postcode').value,
            country: document.getElementById('country').value,
            cardnumber: document.getElementById('card_number').value,
            month: document.getElementById('card_month').value,
            year: document.getElementById('card_year').value,
            // cvv: document.getElementById('card_cvv').value,
        },
        function () {
            console.log('saved')
        }
    )
})

document.getElementById('load').addEventListener('click', () => {
    chrome.storage.sync.get(
        [
            'name',
            'email',
            'telephone',
            'address1',
            'address2',
            'address3',
            'city',
            'postcode',
            'country',
            'cardnumber',
            'month',
            'year',
            // 'cvv'
        ],
        function (result) {
            ;(document.getElementById('name').value = result.name),
                (document.getElementById('email').value = result.email),
                (document.getElementById('tele').value = result.telephone),
                (document.getElementById('address_1').value = result.address1),
                (document.getElementById('address_2').value = result.address2),
                (document.getElementById('address_3').value = result.address3),
                (document.getElementById('city').value = result.city),
                (document.getElementById('postcode').value = result.postcode),
                (document.getElementById('coutry').value = result.country),
                (document.getElementById('card_number').value =
                    result.cardnumber),
                (document.getElementById('card_month').value = result.month),
                (document.getElementById('card_year').value = result.year)
            // (document.getElementById('card_cvv').value = result.cvv)
        }
    )
})
