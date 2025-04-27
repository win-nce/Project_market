document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product4 = {
        name: "Spiral zip pants -KHAKI-",
        price: "¥15,780",
        image: "./Abyssea/brown_trousers (4).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product4);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
