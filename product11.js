document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product11 = {
        name: "Abyssea photo big hoodie",
        price: "¥11,880",
        image: "./Abyssea/neverthesame_hoodie (2).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product11);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
