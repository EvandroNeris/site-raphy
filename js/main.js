window.addEventListener("load", function () {
    // Oculta a tela de carregamento após o carregamento completo
  setTimeout(() => {
    var loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.style.display = "none";

    var content = document.getElementById("content");
    content.style.display = "block";
  }, 1000)
});

document.getElementById("expanded-button-1").addEventListener("click", function() {
  var expandedContent = document.getElementById("expanded-content-1");
  var icon = this.querySelector("svg");

  if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
      expandedContent.style.display = "block";
      icon.innerHTML = '<path d="M17.9939 10.7686L9.64753 1.57181L1.30117 10.7686" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
      expandedContent.style.display = "none";
      icon.innerHTML = '<path d="M4.30112 9.57178L12.6475 18.7685L20.9938 9.57178" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  }
});

document.getElementById("expanded-button-2").addEventListener("click", function() {
  var expandedContent = document.getElementById("expanded-content-2");
  var icon = this.querySelector("svg");

  if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
      expandedContent.style.display = "block";
      icon.innerHTML = '<path d="M17.9939 10.7686L9.64753 1.57181L1.30117 10.7686" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
      expandedContent.style.display = "none";
      icon.innerHTML = '<path d="M4.30112 9.57178L12.6475 18.7685L20.9938 9.57178" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  }
});

document.getElementById("expanded-button-3").addEventListener("click", function() {
  var expandedContent = document.getElementById("expanded-content-3");
  var icon = this.querySelector("svg");

  if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
      expandedContent.style.display = "block";
      icon.innerHTML = '<path d="M17.9939 10.7686L9.64753 1.57181L1.30117 10.7686" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
      expandedContent.style.display = "none";
      icon.innerHTML = '<path d="M4.30112 9.57178L12.6475 18.7685L20.9938 9.57178" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  }
});

document.getElementById("expanded-button-4").addEventListener("click", function() {
  var expandedContent = document.getElementById("expanded-content-4");
  var icon = this.querySelector("svg");

  if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
      expandedContent.style.display = "block";
      icon.innerHTML = '<path d="M17.9939 10.7686L9.64753 1.57181L1.30117 10.7686" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
      expandedContent.style.display = "none";
      icon.innerHTML = '<path d="M4.30112 9.57178L12.6475 18.7685L20.9938 9.57178" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  }
});

document.getElementById("expanded-button-5").addEventListener("click", function() {
  var expandedContent = document.getElementById("expanded-content-5");
  var icon = this.querySelector("svg");

  if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
      expandedContent.style.display = "block";
      icon.innerHTML = '<path d="M17.9939 10.7686L9.64753 1.57181L1.30117 10.7686" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
      expandedContent.style.display = "none";
      icon.innerHTML = '<path d="M4.30112 9.57178L12.6475 18.7685L20.9938 9.57178" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  }
});

document.getElementById("expanded-button-6").addEventListener("click", function() {
  var expandedContent = document.getElementById("expanded-content-6");
  var icon = this.querySelector("svg");

  if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
      expandedContent.style.display = "block";
      icon.innerHTML = '<path d="M17.9939 10.7686L9.64753 1.57181L1.30117 10.7686" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
      expandedContent.style.display = "none";
      icon.innerHTML = '<path d="M4.30112 9.57178L12.6475 18.7685L20.9938 9.57178" stroke="#434343" stroke-width="2.08659" stroke-linecap="round" stroke-linejoin="round"/>';
  }
});


window.addEventListener("scroll", function() {
  var scrollMenu = document.getElementById("scroll-menu");
  
  // Verifica se a posição de rolagem vertical (scrollY) é maior que 100 pixels
  if (window.scrollY > 50) {
    scrollMenu.classList.remove("hidden-nav"); // Remove a classe que oculta o menu
  } else {
    scrollMenu.classList.add("hidden-nav"); // Adiciona a classe para ocultar o menu
  }
});

const logoCarousel = document.querySelector('.logo-carousel');
const logoContainers = document.querySelectorAll('.logo-container');

let totalWidth = 0;

logoContainers.forEach((container) => {
  totalWidth += container.clientWidth + 20; // Adiciona a largura do logo e o espaçamento
});

logoCarousel.style.animationDuration = `${totalWidth / 100}px`;
