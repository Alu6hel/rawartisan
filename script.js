document.addEventListener('DOMContentLoaded', function () {
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

  // Close modal if clicking


