let quantity = 1;

function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').textContent = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) { 
        quantity--;
        document.getElementById('quantity').textContent = quantity;
    }
}



const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselTrack = document.querySelector('.carousel-track');
const itemsToShow = 5;
const itemWidth = 210;
let currentIndex = 0;
nextBtn.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const maxIndex = totalItems - itemsToShow;
    if (currentIndex < maxIndex) {
        currentIndex++;
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});





window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const productsData = JSON.parse(localStorage.getItem('productsData'));

    const product = productsData.find(p => p.id == productId);

    if (product) {
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = `${product.price} EGP`;
        document.getElementById('product-image').src = product.images[0];
    } else {
        alert('Product not found!');
    }
};



const cartCounter = document.getElementById('cart-counter');
const addToCartButton = document.getElementById('add-to-cart');

let cartCount = 0;

addToCartButton.addEventListener('click', () => {
cartCount++;
cartCounter.textContent = cartCount;
});