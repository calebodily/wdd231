const gold = document.querySelector('#gold');
const goldButton = document.querySelector('#gold-button');

goldButton.addEventListener('click', () => {
    gold.innerHTML = `
    <div class="modal-header">
        <h2>Gold Membership</h2>
        <button class="modal-close" aria-label="Close membership details">❌</button>
    </div>
        <p>Yearly Subscription Price: $600</p>
        <p>Added to Chamber of Commerce Directory. Added to email newsletter. Given a Chamber of Commerce Decal for window. Advertising marketing and design consultation. Logo displayed at the Chamber of Commerce. Logo printed in program at annual banquet. Logo displayed at Chamber Events. Name announced during annual banquet. Networking with other businesses. $300 towards advertising. Display of products in chamber of commerce office.</p>
    `;

    gold.showModal();

    gold.querySelector('.modal-close').addEventListener('click', () => {
        gold.close();
    });
});


const silver = document.querySelector('#silver');
const silverButton = document.querySelector('#silver-button');

silverButton.addEventListener('click', () => {
    silver.innerHTML = `
    <div class="modal-header">
        <h2>Silver Membership</h2>
        <button class="modal-close" aria-label="Close membership details">❌</button>
    </div>
        <p>Yearly Subscription Price: $325</p>
        <p>Added to Chamber of Commerce Directory. Added to email newsletter. Given a Chamber of Commerce Decal for window. Advertising marketing and design consultation. Logo displayed at the Chamber of Commerce. Logo printed in program at annual banquet. Logo displayed at Chamber Events. Name announced during annual banquet. Networking with other businesses. $150 towards advertising.</p>
    `;

    silver.showModal();

    silver.querySelector('.modal-close').addEventListener('click', () => {
        silver.close();
    });
});


const bronze = document.querySelector('#bronze');
const bronzeButton = document.querySelector('#bronze-button');

bronzeButton.addEventListener('click', () => {
    bronze.innerHTML = `
    <div class="modal-header">
        <h2>Bronze Membership</h2>
        <button class="modal-close" aria-label="Close membership details">❌</button>
    </div>
        <p>Yearly Subscription Price: $150</p>
        <p>Added to Chamber of Commerce Directory. Added to email newsletter. Given a Chamber of Commerce Decal for window. Advertising marketing and design consultation. Logo displayed at the Chamber of Commerce. Logo printed in program at annual banquet.</p>
    `;

    bronze.showModal();

    bronze.querySelector('.modal-close').addEventListener('click', () => {
        bronze.close();
    });
});


const nonprofit = document.querySelector('#nonprofit');
const nonprofitButton = document.querySelector('#nonprofit-button');

nonprofitButton.addEventListener('click', () => {
    nonprofit.innerHTML = `
    <div class="modal-header">
        <h2>Non Profit Membership</h2>
        <button class="modal-close" aria-label="Close membership details">❌</button>
    </div>
        <p>Yearly Subscription Price: Free</p>
        <p>Added to Chamber of Commerce Directory. Added to email newsletter. Given a Chamber of Commerce Decal for window.</p>
    `;

    nonprofit.showModal();

    nonprofit.querySelector('.modal-close').addEventListener('click', () => {
        nonprofit.close();
    });
});