document.getElementById('buildingForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const businessName = document.getElementById('businessName').value;
    const businessAddress = document.getElementById('businessAddress').value;
    const businessZip = document.getElementById('businessZip').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const buildingNamePlaceholder = '';


    const payload = {
        name: businessName,
        building_name: buildingNamePlaceholder,
        address: businessAddress,
        zip: businessZip,
        phone: phone,
        email: email
    }

    const requestOptions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        redirect: 'follow'
    };

    fetch("https://energy311dev.appspot.com/a/building", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
});


