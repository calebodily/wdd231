const params = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `<p>Form submitted for ${params.get('organizations_name')} by ${params.get('first_name')} ${params.get('last_name')}</p>
<p>Email: ${params.get('email')}</p>
<p>Phone: ${params.get('phone')} </p>
<p>Current Date Timestamp: ${params.get('load_time')} </p>`;