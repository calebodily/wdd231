import { locations } from "../data/interests.mjs";

function LocationInterests(locations) {
    const container = document.querySelector("#card");
    container.innerHTML = "";
    locations.forEach(location => {
        let card = document.createElement("section");
        card.classList.add("location-card");
        let name = document.createElement("h2");
        let img = document.createElement("img");
        let adresses = document.createElement("p");
        adresses.classList.add("adress");
        let paragraph = document.createElement("p");
        paragraph.classList.add("paragraph");
        let learn = document.createElement("button");

        name.textContent = `${location.name}`;
        img.setAttribute('src', location.img);
        img.setAttribute('alt', `Image of  ${location.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300px');
        img.setAttribute('height', 'auto');
        adresses.textContent = `${location.address}`;
        paragraph.textContent = `${location.description}`;
        learn.textContent = `learn more`

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(adresses);
        card.appendChild(paragraph);
        card.appendChild(learn);

        document.querySelector("#card").appendChild(card);
    });
}

LocationInterests(locations);