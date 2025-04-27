const video = document.getElementById('bgVideo');

video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    speed: 800, 
  });

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const target = link.getAttribute('data-target');
        switch(target) {
            case 'home':
                window.location.href = 'home.html';
                break;
            case 'cart':
                window.location.href = 'cart.html';
                break;
            case 'login':
                window.location.href = 'login.html';
                break;
            case 'contacts':
                if (window.location.pathname.includes('home.html')) {
                    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.href = 'home.html#footer';
                }
                break;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");   //тыкаем на карточки 

  productCards.forEach(card => {
      card.addEventListener("click", () => {
          const productId = card.getAttribute("data-id");
          window.location.href = `${productId}.html`;
      });
  });
});

// ---------------------------------------------------------------------------
    document.getElementById("map-link").addEventListener("click", function () {
        window.open("https://www.google.com/maps/place/Laforet+Harajuku/@35.6692109,139.7052614,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ca48de018ad:0x7f96d764aa0f19cf!8m2!3d35.6692109!4d139.7052614!16zL20vMDU3eW0x?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D", "_blank");
});
  
    document.getElementById("order-link").addEventListener("click", function () {
    window.location.href = "cart.html";
});
  
    document.getElementById("registration-link").addEventListener("click", function () {
        window.location.href = "registration.html";
});
  
    document.getElementById("instagram-link").addEventListener("click", function () {
        window.open("https://www.instagram.com/_ciel_0/", "_blank");
});
  
    document.getElementById("officials-link").addEventListener("click", function () {
        window.open("https://abyssea.jp/", "_blank");
});
  
    document.getElementById("tiktok-link").addEventListener("click", function () {
        window.open("https://www.tiktok.com/@_ciel_0", "_blank");
});
  
