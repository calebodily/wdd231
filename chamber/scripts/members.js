const grid = document.querySelector('#grid');
const list = document.querySelector('#list');

function MemberCard(member) {
    const container = document.querySelector("#card");
    container.innerHTML = "";
    member.forEach(participant => {
        let card = document.createElement("section");
        card.classList.add("member-card");
        let name = document.createElement("h2");
        let adresses = document.createElement("p")
        let phone = document.createElement("p")
        let url = document.createElement("a")
        let img = document.createElement("img")

        name.textContent = `${participant.name}`;
        url.setAttribute('href', `${participant.url}`);
        url.textContent = "Visit Website";
        phone.textContent = `${participant.phone_number}`;
        adresses.textContent = `${participant.adresses}`;

        img.setAttribute('src', participant.img_file);
        img.setAttribute('alt', `Image of  ${participant.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '450');
        img.setAttribute('height', 'auto');

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(adresses);
        card.appendChild(phone);
        card.appendChild(url);

        document.querySelector("#card").appendChild(card);
    });
}

function MemberList(member) {
    const container = document.querySelector("#card");
    container.innerHTML = "";
    member.forEach(participant => {
        let list = document.createElement("section");
        list.classList.add("member-list");
        let name = document.createElement("h2");
        let url = document.createElement("a")

        name.textContent = `${participant.name}`;
        url.setAttribute('href', `${participant.url}`);
        url.textContent = "Visit Website";

        list.appendChild(name);
        list.appendChild(url);

        document.querySelector("#card").appendChild(list);
    });
}

let members = []

async function getMemberData() {
    const response = await fetch("data/members.json");
    members = await response.json();
    MemberCard(members);
}

getMemberData()

grid.addEventListener("click", (event) => {
    event.preventDefault();
    MemberCard(members);
})

list.addEventListener("click", (event) => {
    event.preventDefault();
    MemberList(members);
})