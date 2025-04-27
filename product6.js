document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product6 = {
        name: "「Kusari」see-through shirts",
        price: "¥13,980",
        image: "./Abyssea/chain_shirt (3).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product6);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
