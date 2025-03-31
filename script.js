document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close');

    function loadGallery(folder) {
        const galleryContent = document.getElementById('gallery-content');
        galleryContent.innerHTML = '';

        for (let i = 1; i <= 8; i++) {
            let img = document.createElement("img");
            img.src = `images/${folder}/image${i}.jpg`;
            img.classList.add("gallery-item");
            galleryContent.appendChild(img);

            img.addEventListener('click', function () {
                modal.style.display = 'block';
                modalImg.src = this.src;
            });
        }
    }

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
