function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create the notification container
  const notification = document.createElement('div');

  // Set styles for the notification
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';

  // Add a class for cleanup or reuse
  notification.classList.add('custom-notification');

  // Add content to the notification
  notification.innerHTML = `
    <strong>StarlightAPI</strong>
    <p>${message}</p>
  `;

  // Append the notification to the document body
  document.body.appendChild(notification);

  // Slide in the notification
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); // Delay to trigger the animation

  // Automatically hide after the specified duration
  setTimeout(() => {
    notification.style.right = '-400px'; // Slide out
    setTimeout(() => notification.remove(), 500); // Remove after animation ends
  }, duration);
}

// Example: Call the function to show a notification
showNotification('Successfully Injected Code!', 4000);
