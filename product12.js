
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
    
document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product12 = {
        name: "BANANA curve skinny denim pants -Black one wash crash-",
        price: "¥17,580",
        image: "./Abyssea/skiny_jeans (4).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product12);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
