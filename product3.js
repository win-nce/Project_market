document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product3 = {
        name: "Spiral zip pants -BLACK-",
        price: "¥15,780",
        image: "./Abyssea/black_trousers (3).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product3);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
