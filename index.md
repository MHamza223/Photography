---
layout: default
title: "Home"
---

<div class="categories">
  <div class="category">
    <a href="{{ '/categories/Wedding/' | relative_url }}">
      <h2>Wedding</h2>
      <img src="{{ '/WeddingImages/DSC04696.JPG' | relative_url }}" alt="Wedding">
    </a>
  </div>


  <div class="category">
    <a href="{{ '/categories/Party/' | relative_url }}">
      <h2>Party</h2>
      <img src="{{ '/PartyImages/DSC05187.JPG' | relative_url }}" alt="Party">
    </a>
  </div>

  
  <div class="category">
    <a href="{{ '/categories/Portrait/' | relative_url }}">
      <h2>Portraits</h2>
      <img src="{{ '/PortraitImages/WhatsApp Image 2024-04-28 at 15.14.09_8fc52d74.jpg' | relative_url }}" alt="Portrait">
    </a>
  </div>
  
  <!-- Add more categories as needed -->
</div>



<style>
 .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center; /* Center the categories */
    padding-top: 200px; /* Add top padding to move the images down */

}

.category {
    position: relative;
    overflow: hidden;
    flex: 1 1 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
    margin: 10px;
    transition: transform 0.3s;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow for the category */
    border-radius: 10px; /* Rounded corners for a modern look */
    background-color: #fff; /* White background for the category */
}

@media (max-width: 991.98px) {
    .category {
        flex: 1 1 calc(50% - 20px); /* Adjust width for tablets */
        max-width: calc(50% - 20px);
    }
}

@media (max-width: 575.98px) {
    .category {
        flex: 1 1 calc(70% - 20px); /* Two columns on smaller screens */
        max-width: calc(70% - 20px);
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
