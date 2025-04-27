const cartContainer = document.getElementById('cart-items');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

if (cart.length === 0) {
    cartContainer.innerHTML = "<p style='color:white; text-align:center;'>Your cart is empty.</p>";
} else {
    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h2>${item.name}</h2>
                <p>${item.price}</p>
            </div>
        `;
        cartContainer.appendChild(div);
    });
}

document.getElementById('purchase').addEventListener('click', () => {
    alert("Purchase successful!");
    localStorage.removeItem('cart');
    location.reload();
});

document.getElementById('delete').addEventListener('click', () => {
    alert("Deleted!");
    localStorage.removeItem('cart');
    location.reload();
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const target = link.getAttribute('data-target');
        switch(target) {
            case 'home':
                window.location.href = 'home.html';
                break;
            case 'cart':
                window.location.href = 'cart.html';
                break;
            case 'login':
                window.location.href = 'login.html';
                break;
            case 'contacts':
                if (window.location.pathname.includes('home.html')) {
                    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.href = 'home.html#footer';
                }
                break;
        }
    });
});
        
