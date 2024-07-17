---
layout: default
title: "Wedding"
permalink: /categories/Wedding/
images:
  - /Photography/WeddingImages/DSC04532.jpeg
  - /Photography/WeddingImages/DSC04547.JPG
  - /Photography/WeddingImages/DSC04549.JPG
  - /Photography/WeddingImages/DSC04559.JPG
  - /Photography/WeddingImages/DSC04566.JPG
  - /Photography/WeddingImages/DSC04570.jpeg
  - /Photography/WeddingImages/DSC04586.JPG
  - /Photography/WeddingImages/DSC04588.JPG
  - /Photography/WeddingImages/DSC04591.JPG
  - /Photography/WeddingImages/DSC04597.JPG
  - /Photography/WeddingImages/DSC04600.JPG
  - /Photography/WeddingImages/DSC04612.JPG
  - /Photography/WeddingImages/DSC04639.JPG
  - /Photography/WeddingImages/DSC04691.JPG
  - /Photography/WeddingImages/DSC04696.JPG
  - /Photography/WeddingImages/DSC04714.JPG
  - /Photography/WeddingImages/DSC04721.JPG
  - /Photography/WeddingImages/DSC04981.JPG
  - /Photography/WeddingImages/DSC05036.JPG
















---

<div class="category-images">
    {% for image in page.images %}
        <div class="category">
            <a href="{{ image }}" >
                <img src="{{ image }}" alt="Wedding">
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
</style>