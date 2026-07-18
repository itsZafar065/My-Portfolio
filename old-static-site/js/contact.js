/* Contact Form Validation & Submission Handler */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const inputs = document.querySelectorAll('.form-input');

  // Input states (Adding values classes for label positioning)
  inputs.forEach(input => {
    // Check initially if input is prefilled
    if (input.value.trim() !== '') {
      input.classList.add('has-value');
    }

    input.addEventListener('blur', () => {
      if (input.value.trim() !== '') {
        input.classList.add('has-value');
      } else {
        input.classList.remove('has-value');
      }
    });
  });

  // Client-side validations
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();
      const submitBtn = form.querySelector('button[type="submit"]');

      // Clear previous status
      statusEl.className = 'form-status';
      statusEl.style.display = 'none';

      // Validation flags
      if (!name || name.length < 2) {
        showStatus('Please enter a valid name (at least 2 characters).', 'error');
        return;
      }

      if (!email || !validateEmail(email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
      }

      if (!message || message.length < 10) {
        showStatus('Please enter a message (at least 10 characters).', 'error');
        return;
      }

      // Submit loading simulation
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Sending message...';
        if (typeof lucide !== 'undefined') lucide.createIcons();

        // Simulate server communication
        setTimeout(() => {
          showStatus('Thank you, Zafar has received your message! He will get back to you shortly.', 'success');
          form.reset();
          inputs.forEach(input => input.classList.remove('has-value'));
          
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 1500);
      }
    });
  }

  // Email regex validator helper
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Display status overlay helper
  function showStatus(msg, type) {
    if (!statusEl) return;
    statusEl.innerHTML = msg;
    statusEl.classList.add(type);
    statusEl.style.display = 'block';
  }
});
