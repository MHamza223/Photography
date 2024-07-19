---
layout: page
title: "Portrait"
permalink: /categories/Portrait/
images:
  - /Photography/PortraitImages/DSC04397.JPG
  - /Photography/PortraitImages/DSC04429.JPG
  - /Photography/PortraitImages/DSC04457.JPG
  - /Photography/PortraitImages/ITWKE4037.JPG
  - /Photography/PortraitImages/KQYQE5493.JPG
  - /Photography/PortraitImages/WhatsApp Image 2024-04-28 at 15.11.26_ae98f6c5.jpg
  - /Photography/PortraitImages/WhatsApp Image 2024-04-28 at 15.13.05_ab1453ac.jpg
  - /Photography/PortraitImages/WhatsApp Image 2024-04-28 at 15.13.30_4a3a4873.jpg
  - /Photography/PortraitImages/WhatsApp Image 2024-04-28 at 15.14.09_8fc52d74.jpg

---

<div class="category-images">
    {% for image in page.images %}
        <div class="category">
            <a href="{{ image }}" >
                <img src="{{ image }}" alt="Portrait">
            </a>
        </div>
    {% endfor %}
</div>

<style>
  .category-images {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Center the categories */
        padding-top: 50px; /* Add top padding to move the images down */

}

.category {
  position: relative;
  overflow: hidden;
  flex: 1 1 calc(80% - 20px); /* Increased size to 50% width */
  max-width: calc(80% - 20px); /* Ensure it scales up to a larger size */
  box-sizing: border-box;
  margin: 10px;
  transition: transform 0.3s;
  
}


@media (max-width: 768px) {
  .category {
    flex: 1 1 calc(90% - 20px); /* Full width on smaller screens */
    max-width: calc(90% - 20px);
  }
}

.category:hover {
  transform: scale(1.05);
}

.category img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s;
}

.category:hover img {
  transform: scale(1.1);
}

.category h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin: 0;
  text-align: center;
  font-size: 1.5em;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s;
}

.category:hover h2 {
  background-color: rgba(0, 0, 0, 0.7);
}

</style>