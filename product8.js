document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product8 = {
        name: "Urake gown parka",
        price: "¥19,980",
        image: "./Abyssea/halatik (4).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product8);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
