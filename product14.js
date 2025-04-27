document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product14 = {
        name: "Basket zip hoodie",
        price: "¥16,280",
        image: "./Abyssea/zip_hoodie (3).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product14);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
