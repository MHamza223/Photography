---
layout: default
title: "Home"
---

<div class="categories">
  <div class="category">
    <a href="{{ '/categories/Wedding/' | relative_url }}">
      <h2>Wedding</h2>
      <img src="{{ '/WeddingImages/DSC04547.jpg' | relative_url }}" alt="Wedding">
    </a>
  </div>



  <div class="Portrait ">
    <a href="{{ '/categories/portraits/' | relative_url }}">
      <h2>Portraits</h2>
      <img src="{{ '/PortraitImages/WhatsApp Image 2024-04-28 at 15.14.09_8fc52d74.jpg' | relative_url }}" alt="Events">
    </a>
  </div>



  <div class="Party">
    <a href="{{ '/categories/Party/' | relative_url }}">
      <h2>Party</h2>
      <img src="{{ '/PartyImages/DSC05241 (1).jpg' | relative_url }}" alt="Party">
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
  }

  .category {
    position: relative;
    overflow: hidden;
    flex: 1 1 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
    box-sizing: border-box;
    margin: 10px;
    transition: transform 0.3s;
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

  .Portrait {
    position: relative;
    overflow: hidden;
    flex: 1 1 calc(33.333% - 10px);
    max-width: calc(33.333% - 10px);
    box-sizing: border-box;
    margin: 10px;
    transition: transform 0.3s;
  }

  .Portrait:hover {
    transform: scale(1.05);
  }

  .Portrait img {
    width: 100%; /* Ensure the image takes up the full width of its container */
    height: auto;
    display: block;
    transition: transform 0.3s;
  }

  .Portrait:hover img {
    transform: scale(1.1);
  }

  .Portrait h2 {
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

  .Portrait:hover h2 {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .Party {
    position: relative;
    overflow: hidden;
    flex: 1 1 calc(50% - 20px); /* Make the Party category take more space */
    max-width: calc(50% - 20px); /* Ensure it scales up to a larger size */
    box-sizing: border-box;
    margin: 10px;
    transition: transform 0.3s;
  }

  .Party:hover {
    transform: scale(1.05);
  }

  .Party img {
    width: 100%; /* Ensure the image takes up the full width of its container */
    height: auto;
    display: block;
    transition: transform 0.3s;
  }

  .Party:hover img {
    transform: scale(1.1);
  }

  .Party h2 {
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

  .Party:hover h2 {
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
