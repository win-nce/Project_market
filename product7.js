document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product7 = {
        name: "Pigment big sweat",
        price: "¥12,980",
        image: "./Abyssea/gray_hoodie (4).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product7);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
