
  
let imagesInterval;
let counter = 0;
let images = ["6.jpg", "44.jpg", "9.jpg"];
let myImg = document.getElementById("myImgSlide");


function slideShowPic() {
    imagesInterval = setInterval(function () {
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        myImg.src = "images/" + images[counter];
    }, 2000);
}


slideShowPic();





let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let carouselItem = document.querySelector('.item');
let items = document.querySelectorAll('.product-card');
let currentIndex = 0;

next.addEventListener('click', () => {
    if (currentIndex < items.length - 1) 
      carouselItem.style.transform = `translateX(-${++currentIndex * items[0].offsetWidth}px)`;
 
});

prev.addEventListener('click', () => {
    if (currentIndex > 0)
       carouselItem.style.transform = `translateX(-${--currentIndex * items[0].offsetWidth}px)`;
});





let productsData;

function loadProductsData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'product1.json');
    xhr.onload = function() {
        if (xhr.status == 200) {
            productsData = JSON.parse(xhr.responseText);
            localStorage.setItem('productsData', JSON.stringify(productsData)); 
            displayProducts(productsData);
        }
    };
    xhr.send();
}

loadProductsData();

function displayProducts(data) {
    let container = document.getElementById('products');
    for (let product of data) {
        let card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div>⭐⭐⭐⭐☆</div>
            <p>${product.description}</p>
            <p><strong>${product.price} EGP</strong></p>
            <hr>
            <h6>Or Pay with Raya Installments starting from 675 / 24 Months</h6>
        `;
        card.onclick = function() {
            window.location.href = `product.html?id=${product.id}`;
        };
        container.appendChild(card);
    }
}








const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value;

  productCards.forEach(function (card) {
    const productText = card.querySelector('p').textContent;

    if (productText.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});



const cartCounter = document.getElementById('cart-counter');
const addToCartButton = document.getElementById('add-to-cart');

let cartCount = 0;

addToCartButton.addEventListener('click', () => {
cartCount++;
cartCounter.textContent = cartCount;
});