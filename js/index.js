document.addEventListener('DOMContentLoaded', function () {
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');

  // Set dark theme by default
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.checked = true;

  themeToggle.addEventListener('change', function () {
    const newTheme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  });

  // Upload photo functionality
  const profilePhoto = document.getElementById('profilePhoto');

  profilePhoto.addEventListener('click', function () {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.onchange = function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          profilePhoto.innerHTML = `<img src="${event.target.result}" alt="Юрий Саламатов">`;
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  });
});
