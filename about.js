document.getElementById('more-info-btn').addEventListener('click', function() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
      this.textContent = 'Show Less';
    } else {
      moreInfo.style.display = 'none';
      this.textContent = 'Learn More';
    }
  });