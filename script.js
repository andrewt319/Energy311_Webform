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


/*
document.getElementById('input_7').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const businessName = document.getElementById('input_15').value;
    const businessAddress = document.getElementById('input_16').value;
    const businessZip = document.getElementById('input_17').value;
    const areaCode = document.getElementById('input_12_area');
    const phoneNumber = document.getElementById('input_12_phone').value;
    const email = document.getElementById('input_11').value;
    const buildingNamePlaceholder = '';
    const phone = areaCode + phoneNumber


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
*/