const visitMessage = document.querySelector("#message");

const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions";
}
else {
    const lastVisitTime = Number(lastVisit);
    const diff = now - lastVisitTime;

    const msToDays = 86400000;
    const days = Math.floor(diff / msToDays)

    if (days < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    }
    else if(days > 0) {
        visitMessage.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);