// Select all the images in the gallery
const galleryImages = document.querySelectorAll('.album-gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentImageIndex;


    // Select all portfolio items
const portfolioItems = document.querySelectorAll('.album-gallery');

// Create the IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after it's visible
        }
    });
}, {
    threshold: 0.25
});

// Observe each portfolio item
portfolioItems.forEach(item => {
    observer.observe(item);
});

// Ensure that images that are already in the viewport when the page loads are visible immediately
window.addEventListener('load', () => {
    portfolioItems.forEach(item => {
        // Check if the image is already visible
        if (isInViewport(item)) {
            item.classList.add('visible');
        }
    });
});

// Function to check if an element is in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

    
    


    
// Open Lightbox
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentImageIndex = index;  // Store the index of the current image
    showImage(index);
    lightbox.style.display = 'flex';
  });
});



document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    const closeBtn = document.querySelector('.close'); // Make sure this is the correct selector
  
    // Check if closeBtn exists to prevent the error
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    }
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    const closeBtn = document.querySelector('.close'); // Make sure this is the correct selector
  
    // Check if closeBtn exists to prevent the error
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    }
  });
  



// Show Image in Lightbox
function showImage(index) {
  const imageSource = galleryImages[index].src;
  lightboxImg.src = imageSource;
}

// Navigate to Previous Image
prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex === 0) ? galleryImages.length - 1 : currentImageIndex - 1;
  showImage(currentImageIndex);
});

// Navigate to Next Image
nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex === galleryImages.length - 1) ? 0 : currentImageIndex + 1;
  showImage(currentImageIndex);
});

// Close Lightbox when clicking outside of the image
lightbox.addEventListener('click', (event) => {
  if (event.target !== lightboxImg && event.target !== prevBtn && event.target !== nextBtn) {
    lightbox.style.display = 'none';
  }
});


