document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product9 = {
        name: "Stretch lvn denim jacket",
        price: "¥25,480",
        image: "./Abyssea/jeans_jacket (2).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product9);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
