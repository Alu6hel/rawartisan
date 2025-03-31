document.addEventListener('DOMContentLoaded', function () {
    // Log website load with a timestamp for better tracking
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] Website Loaded Successfully!`);

    // Optional: Add a class to body once the page is fully loaded
    document.body.classList.add('loaded'); 

    /* === Gallery Modal Functionality === */
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close');
    const galleryGrid = document.querySelector('.gallery-grid');

    // Fetch and display images dynamically (no need to manually add them)
    function loadGalleryImages(folder, category) {
        fetch(`images/${folder}/`)
            .then(response => response.text())
            .then(data => {
                let parser = new DOMParser();
                let doc = parser.parseFromString(data, "text/html");
                let imageLinks = doc.querySelectorAll("a");

                imageLinks.forEach(link => {
                    let imageName = link.getAttribute("href");
                    if (imageName.match(/\.(jpg|jpeg|png|gif)$/)) {
                        let img = document.createElement("img");
                        img.src = `images/${folder}/${imageName}`;
                        img.alt = `${category} - ${imageName}`;
                        img.classList.add("gallery-item");

                        galleryGrid.appendChild(img);
                        attachModalEvent(img);
                    }
                });
            })
            .catch(error => console.error("Error loading images:", error));
    }

    // Function to attach modal functionality to images
    function attachModalEvent(img) {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    }

    // Close modal when clicking close button
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal if clicking anywhere outside the image
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Optional: Example to load images into the gallery when the page loads
    loadGalleryImages('artworks', 'Contemporary Art');  // Specify folder and category
});



