document.querySelector('.add-to-cart').addEventListener('click', function() {
    const product12 = {
        name: "BANANA curve skinny denim pants -Black one wash crash-",
        price: "¥17,580",
        image: "./Abyssea/skiny_jeans (4).jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product12);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    window.location.href = "cart.html";
});
