---
layout: default
title: "Party"
permalink: /categories/Party/
images:
  - /Photography/PartyImages/DSC03913.JPG
  - /Photography/PartyImages/DSC03918.JPG
  - /Photography/PartyImages/DSC03972 (1).JPG
  - /Photography/PartyImages/DSC03980 (1).JPG
  - /Photography/PartyImages/DSC04029.JPG
  - /Photography/PartyImages/DSC04098 (1).JPG
  - /Photography/PartyImages/DSC05053.JPG
  - /Photography/PartyImages/DSC05174.JPG
  - /Photography/PartyImages/DSC05187.JPG
  - /Photography/PartyImages/DSC05241 (1).JPG
  - /Photography/PartyImages/DSC05276.JPG
  - /Photography/PartyImages/DSC05313.JPG
  - /Photography/PartyImages/DSC05383.JPG
  - /Photography/PartyImages/DSC05391.JPG
  - /Photography/PartyImages/DSC05442.JPG


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
}

.category {
  position: relative;
  overflow: hidden;
  flex: 1 1 calc(50% - 20px); /* Increased size to 50% width */
  max-width: calc(50% - 20px); /* Ensure it scales up to a larger size */
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