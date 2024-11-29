
setTimeout(function() {
    const texto = document.querySelector('.texto');
    const novoConteudo = document.querySelector('.novo-conteudo');

   
    texto.style.opacity = 0;

   
    setTimeout(function() {
        novoConteudo.classList.add('active');
    }, 900);
}, 600); 

// Para a parte do hamburger, pode deixar o mesmo evento automático, se preferir
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Podemos simular um "click" automático no hamburger após 3 segundos, por exemplo
setTimeout(() => {
    hamburger.click(); // Simula o clique no menu hamburger
}, 1000); // Depois de 3 segundos


