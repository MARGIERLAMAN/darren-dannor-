document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const detailsPane = document.getElementById('detailsPane');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsPrice = document.getElementById('detailsPrice');
    const detailsImages = document.getElementById('detailsImages');
    const closeBtn = document.querySelector('.close-btn');
    
    // Product Carousel Rotation Logic
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img');
        let currentIndex = 0;
        images[currentIndex].classList.add('active');
        
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 2000);
    });

    // Open Details Pane
    products.forEach(product => {
        product.addEventListener('click', () => {
            const title = product.getAttribute('data-title');
            const price = product.getAttribute('data-price');
            const images = JSON.parse(product.getAttribute('data-images'));
            
            detailsTitle.textContent = title;
            detailsPrice.textContent = price;
            
            // Clear previous images
            detailsImages.innerHTML = '';
            
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image;
                detailsImages.appendChild(imgElement);
            });
            
            detailsPane.classList.add('show');
        });
    });

    // Close Details Pane
    closeBtn.addEventListener('click', () => {
        detailsPane.classList.remove('show');
    });
});
