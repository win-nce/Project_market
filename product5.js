document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product5 = {
        name: "Abyssea blanket jacket",
        price: "¥15,780",
        image: "./Abyssea/carpet_jacket (4).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product5);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
