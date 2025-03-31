document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close');

    // Function to load gallery content dynamically based on the folder
    function loadGallery(folder) {
        const galleryContent = document.getElementById('gallery-content');
        galleryContent.innerHTML = '';  // Clear the previous content

        // Dynamically load images (assuming 8 images per folder)
        for (let i = 1; i <= 8; i++) {
            let img = document.createElement("img");
            img.src = `images/${folder}/image${i}.jpg`;
            img.alt = `Image ${i}`;
            img.classList.add("gallery-item");
            galleryContent.appendChild(img);

            // Open modal when an image is clicked
            img.addEventListener('click', function () {
                modal.style.display = 'block';
                modalImg.src = this.src;
            });
        }
    }

    // Event listener for the 'Close' button in the modal
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
