// Inicializando o Swiper com efeitos de transição em cubo
const swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,        // Desativa a movimentação por toque
    grabCursor: false,            // Desativa o cursor de "agarrar"
    cubeEffect: {
        shadow: true,             // Ativa a sombra
        slideShadows: true,       // Ativa sombras dos slides
        shadowOffset: 20,         // Define o deslocamento da sombra
        shadowScale: 0.94,        // Ajusta a escala da sombra
    },
    mousewheel: true,             // Ativa a navegação com o mouse
    speed: 800,                   // Define a velocidade da transição
    loop: true,                   // Habilita a rotação contínua entre os slides
    autoplay: {
        delay: 3000,              // Intervalo automático entre os slides
        disableOnInteraction: false // Permite que o autoplay continue após interação
    }
});

// Função para atualizar a navegação entre os links
function navigateToSlide(index) {
    // Remove a classe "activeLink" de todos os itens
    document.querySelectorAll(".Links li").forEach(link => link.classList.remove("activeLink"));
    
    // Adiciona a classe "activeLink" ao item selecionado
    document.querySelectorAll(".Links li")[index].classList.add("activeLink");
    
    // Move o Swiper para o slide especificado com uma transição suave
    swiper.slideTo(index, 1000, true);
}

// Função para manipular o evento de mudança de slide
swiper.on('slideChange', function () {
    // Quando o slide mudar, atualize a classe do link ativo
    const activeIndex = swiper.activeIndex;
    document.querySelectorAll(".Links li").forEach((link, index) => {
        link.classList.toggle("activeLink", index === activeIndex);
    });
});

// Função que é chamada ao passar o mouse sobre os links para navegar
document.querySelectorAll(".Links li").forEach((link, index) => {
    link.addEventListener('click', () => {
        navigateToSlide(index); // Navega para o slide correspondente
    });
});

// Melhorando a navegação com uma transição suave nos links
document.querySelectorAll(".Links li").forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        link.style.transition = "transform 0.3s ease-in-out";
        link.style.transform = "scale(1.1)";  // Efeito de zoom quando passar o mouse
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = "scale(1)";  // Retorna ao tamanho original
    });
});
