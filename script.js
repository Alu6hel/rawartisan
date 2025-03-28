// Wait until the DOM is fully loaded
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

  // When the user clicks on the close button, close the modal
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Close modal if the user clicks outside the image
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  /* Contact Form Handling */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Basic client-side validation (HTML5 required attributes already help)
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all required fields.');
        return;
      }

      // In a real-world scenario, form data would be sent to the server here.
      // For this static example, we simulate submission.
      e.preventDefault();
      alert('Thank you for your message! We will get back to you shortly.');
      contactForm.reset();
    });
  }
});
