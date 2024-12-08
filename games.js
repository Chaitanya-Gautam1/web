// games.js
document.querySelectorAll('.game-card button').forEach(button => {
    button.addEventListener('click', (e) => {
        const gameName = e.target.closest('.game-card').querySelector('h4').textContent;
        alert(`Launching ${gameName}. Game implementation coming soon!`);
    });
});