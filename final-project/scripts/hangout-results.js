const params = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `<p>Hangout review submitted for ${params.get('group_name')} at ${params.get('time')} by ${params.get('first_name')} ${params.get('last_name')}</p>
<p>Email: ${params.get('email')}</p>
<p>Phone: ${params.get('phone')} </p>
<p>Current Date Timestamp: ${params.get('load_time')} </p>`;