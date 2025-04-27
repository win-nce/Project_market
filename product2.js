document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product2 = {
        name: "Zipup combination rib knit",
        price: "¥18,480",
        image: "./Abyssea/black_sweater (3).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product2);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
