document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close');
    const galleryContent = document.getElementById('gallery-content');

    // Image Data
    const galleryImages = {
        "photo-journalism": [
            "IMG-20250330-WA0008.jpg", "IMG-20250330-WA0006.jpg", "IMG-20250330-WA0004.jpg", 
            "IMG-20250330-WA0003.jpg", "IMG-20250330-WA0002.jpg", "IMG-20250330-WA0001.jpg", 
            "IMG-20250330-WA0000.jpg", "IMG-20250330-WA0015.jpg", "IMG-20250326-WA0012.jpg", 
            "IMG-20250330-WA0014.jpg", "IMG-20250326-WA0011.jpg", "IMG-20250330-WA0013.jpg", 
            "IMG-20250330-WA0011.jpg", "IMG-20250326-WA0005.jpg"
        ],
        "celebrity-photo": [
            "IMG-20250326-WA0004.jpg", "IMG-20250326-WA0006.jpg", "IMG-20250326-WA0007.jpg",
            "IMG-20250326-WA0008.jpg", "IMG-20250326-WA0010.jpg", "IMG-20250330-WA0009.jpg",
            "IMG-20250330-WA0010.jpg", "IMG-20250330-WA0012.jpg"
        ]
    };

    // Home Page Featured Images
    const homeFeaturedImages = [
        "IMG-20250326-WA0002.jpg", "IMG-20250326-WA0013.jpg", "IMG-20250326-WA0014.jpg", 
        "IMG-20250326-WA0015.jpg", "IMG-20250326-WA0017.jpg", "IMG-20250326-WA0018.jpg", 
        "IMG-20250330-WA0007.jpg"
    ];

    // Function to Load Gallery Images
    function loadGallery(folder) {
        if (!galleryContent) return;
        galleryContent.innerHTML = ''; // Clear existing content

        galleryImages[folder].forEach(imageName => {
            let img = document.createElement("img");
            img.src = `images/${folder}/${imageName}`;
            img.alt = "Gallery Image";
            img.classList.add("gallery-item");

            // Open Modal on Click
            img.addEventListener('click', function () {
                modal.style.display = 'block';
                modalImg.src = this.src;
            });

            galleryContent.appendChild(img);
        });
    }

    // Function to Load Home Page Featured Images
    function loadHomeImages() {
        const homeContainer = document.getElementById('home-featured');
        if (!homeContainer) return;

        homeFeaturedImages.forEach(imageName => {
            let img = document.createElement("img");
            img.src = `images/${imageName}`;
            img.alt = "Featured Work";
            img.classList.add("featured-image");

            // Open Modal on Click
            img.addEventListener('click', function () {
                modal.style.display = 'block';
                modalImg.src = this.src;
            });

            homeContainer.appendChild(img);
        });
    }

    // Close Modal
    if (closeModal) {
        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // Load Home Page Images if on Home Page
    loadHomeImages();
});
