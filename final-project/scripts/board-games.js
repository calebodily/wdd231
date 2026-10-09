function BoardGamesCard(filteredBoardGames) {
    const container = document.querySelector(".card");
    container.innerHTML = "";
    filteredBoardGames.forEach(boardGame => {
        let card = document.createElement("section");
        card.classList.add("game-card");
        let name = document.createElement("h1");
        let players = document.createElement("p")
        let age = document.createElement("p")
        let time = document.createElement("p");
        let keywords = document.createElement("p")
        let img = document.createElement("img");

        name.textContent = boardGame.boardGame;
        players.textContent = `Players: ${boardGame.players}`;
        age.textContent = `Age Rating: ${boardGame.age}`;
        time.textContent = `Time: ${boardGame.time} minutes`;
        keywords.textContent = `Keywords: ${boardGame.keywords}`
        img.setAttribute("src", boardGame.imageUrl);
        img.setAttribute("alt", `${boardGame.boardGame}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(players);
        card.appendChild(age);
        card.appendChild(time);
        card.appendChild(keywords);
        card.appendChild(img);

        document.querySelector(".card").appendChild(card);
    });
}

BoardGamesCard(boardGames);


const oneplayer = document.getElementById("1player");
oneplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("1")));
})

const twoplayer = document.getElementById("2players");
twoplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("2")));
})

const threeplayer = document.getElementById("3players");
threeplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("3")));
})

const fourplayer = document.getElementById("4players");
fourplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("4")));
})

const fiveplayer = document.getElementById("5players");
fiveplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("5")));
})

const sixplayer = document.getElementById("6players");
sixplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").includes("6")));
})

const sevenplusplayer = document.getElementById("7+players");
sevenplusplayer.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame =>
        boardGame.players.split(", ").some(player => {
            const number = parseInt(player);
            return number >= 7;
        })))
})

const age6 = document.getElementById("age6+");
age6.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        const age = parseInt(boardGame.age);
        return age <= 6;
    }))
})

const age8 = document.getElementById("age8+");
age8.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        const age = parseInt(boardGame.age);
        return age <= 8;
    }))
})

const age10 = document.getElementById("age10+");
age10.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        const age = parseInt(boardGame.age);
        return age <= 10;
    }))
})

const age12 = document.getElementById("age12+");
age12.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        const age = parseInt(boardGame.age);
        return age <= 12;
    }))
})

const abstract = document.getElementById("abstract");
abstract.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("abstract")
    }));
})

const actionretrieval = document.getElementById("actionretrieval");
actionretrieval.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("action retrieval")
    }));
})

const actionpoints = document.getElementById("actionpoints");
actionpoints.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("action points")
    }));
})

const alliances = document.getElementById("alliances");
alliances.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("alliances")
    }));
})

const areacontrol = document.getElementById("areacontrol");
areacontrol.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("area control")
    }));
})

const areamovement = document.getElementById("areamovement");
areamovement.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("area movement")
    }));
})

const asymetric = document.getElementById("asymetric");
asymetric.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("asymetric")
    }));
})

const bidding = document.getElementById("bidding");
bidding.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("bidding")
    }));
})

const bluffing = document.getElementById("bluffing");
bluffing.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("bluffing")
    }));
})

const cards = document.getElementById("cards");
cards.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("cards")
    }));
})

const cooperative = document.getElementById("cooperative");
cooperative.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("cooperative")
    }));
})

const deduction = document.getElementById("deduction");
deduction.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("deduction")
    }));
})

const dexterity = document.getElementById("dexterity");
dexterity.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("dexterity")
    }));
})

const dice = document.getElementById("dice");
dice.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("dice")
    }));
})

const handmanagement = document.getElementById("handmanagement");
handmanagement.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("hand management")
    }));
})

const hiddenroles = document.getElementById("hiddenroles");
hiddenroles.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("hidden roles")
    }));
})

const income = document.getElementById("income");
income.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("income")
    }));
})

const market = document.getElementById("market");
market.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("market")
    }));
})

const memory = document.getElementById("memory");
memory.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("memory")
    }));
})

const paperpencil = document.getElementById("paperpencil");
paperpencil.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("paper and pencil")
    }));
})

const pushyourluck = document.getElementById("pushyourluck");
pushyourluck.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("push your luck")
    }));
})

const setcollection = document.getElementById("setcollection");
setcollection.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("set collection")
    }));
})

const teambased = document.getElementById("teambased");
teambased.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("team based")
    }));
})

const tileplacement = document.getElementById("tileplacement");
tileplacement.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("tile placement")
    }));
})

const tricktaking = document.getElementById("trick-taking");
tricktaking.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("trick-taking")
    }));
})

const word = document.getElementById("word");
word.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("word")
    }));
})

const workerplacement = document.getElementById("workerplacement");
workerplacement.addEventListener("click", (event) => {
    event.preventDefault();
    BoardGamesCard(boardGames.filter(boardGame => {
        return boardGame.keywords.split(", ").includes("worker placement")
    }));
})