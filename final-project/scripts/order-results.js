const params = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `<p>Order submitted for ${params.getAll('order')} by ${params.get('card_name')}</p>
<p>Email: ${params.get('email')}</p>
<p>Phone: ${params.get('phone')} </p>
<p>Current Date Timestamp: ${params.get('load_time')} </p>`;