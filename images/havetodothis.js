function updateImage() {
    const img = document.querySelector('.card-image');
    if (window.innerWidth >=750) {
        img.src = "images/image-product-desktop.jpg";
    }else {
        img.src = "images/image-product-mobile.jpg";
    }
}

window.addEventListener('resize', updateImage);
window.addEventListener('load', updateImage)