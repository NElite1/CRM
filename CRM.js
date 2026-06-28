const cards = document.querySelectorAll('.info-card');
const detailCopy = document.querySelector('.detail-copy');

function setActiveCard(card) {
  cards.forEach((item) => item.classList.remove('active'));
  card.classList.add('active');

  if (detailCopy) {
    detailCopy.textContent = card.dataset.detail || '';
  }
}

cards.forEach((card) => {
  card.addEventListener('click', () => setActiveCard(card));
});

if (cards.length > 0) {
  setActiveCard(cards[0]);
}
