document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product10 = {
        name: "Side buckle ECO leather big riders",
        price: "¥49,800",
        image: "./Abyssea/leather_jacket (2).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product10);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
