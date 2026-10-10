function BoardGamesCard(filteredBoardGames) {
    const container = document.querySelector("#card");
    container.innerHTML = "";
    filteredBoardGames.forEach(boardGame => {
        let card = document.createElement("section");
        card.classList.add("game-card");
        let name = document.createElement("h2");
        let players = document.createElement("p");
        let age = document.createElement("p");
        let time = document.createElement("p");
        let price = document.createElement("p");
        let stock = document.createElement("p");
        let img = document.createElement("img");
        let dialogbut = document.createElement("button");
        dialogbut.classList.add("dialog")
        let description = document.createElement("dialog");

        dialogbut.addEventListener('click', () => {
            description.innerHTML = `
    <div class="modal-header">
        <h2>${boardGame.boardGame} Description</h2>
        <button class="modal-close" aria-label="Close board game details">❌</button>
    </div>
        <p>${boardGame.description}</p>
    `;
            description.showModal();

            description.querySelector('.modal-close').addEventListener('click', () => {
                description.close();
            });
        });

        name.textContent = boardGame.boardGame;
        players.textContent = `Players: ${boardGame.players}`;
        age.textContent = `Age Rating: ${boardGame.age}`;
        time.textContent = `Average Time to Play: ${boardGame.time} minutes`;
        price.textContent = `Price: $${boardGame.price}`
        stock.textContent = boardGame.stock;
        img.setAttribute("src", boardGame.imageUrl);
        img.setAttribute("alt", `${boardGame.boardGame}`);
        img.setAttribute("loading", "lazy");
        dialogbut.textContent = "Description";

        card.appendChild(name);
        card.appendChild(players);
        card.appendChild(age);
        card.appendChild(time);
        card.appendChild(price);
        card.appendChild(stock);
        card.appendChild(img);
        card.appendChild(dialogbut);

        document.querySelector("#card").appendChild(card);
        document.querySelector("#card").appendChild(description);
    });
}

let games = [];

async function getBoardGameData() {
    try {
        const response = await fetch("data/games.json");

        if (!response.ok) {
            throw new Error("Failed to load board games");
        }
        games = await response.json();

        BoardGamesCard(games);
    } catch (error) {
        console.error("Error loading board games:", error);
        document.querySelector("#card").textContent =
            "Unable to load a random board game.";
    }
}

const all = document.getElementById("all");
all.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(games);
})

const instock = document.getElementById("stocked");
instock.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(games.filter(boardGame => boardGame.stock === "in stock"));
})

getBoardGameData();