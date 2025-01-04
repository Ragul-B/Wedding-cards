// DOM Elements
const cardsGrid = document.querySelector("#wedding-cards .grid");
const accordionItems = document.querySelectorAll(".accordion-item");

// Sample Data
const cards = [
    { type: "traditional", title: "Red Elegance", img: "card1.jpg", desc: "Classic wedding card." },
    { type: "modern", title: "Floral Design", img: "card2.jpg", desc: "Beautiful floral card." },
    { type: "luxury", title: "Gold Premium", img: "card3.jpg", desc: "Luxury wedding card." },
];

// Render Cards
function renderCards(data) {
    cardsGrid.innerHTML = data.map(card => `
        <div class="card">
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
        </div>
    `).join("");
}

// Initialize
renderCards(cards);

// FAQ Accordion
accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
        const content = item.querySelector(".accordion-content");
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
