document.addEventListener('DOMContentLoaded', function () {
  /* Gallery Modal Functionality */
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.getElementById('close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });

  // Close modal when clicking close button
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Close modal if clicking outside the image
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

