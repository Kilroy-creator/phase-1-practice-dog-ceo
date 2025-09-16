// Make sure the DOM is loaded before running
document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  const imageContainer = document.getElementById("dog-image-container");
  const breedList = document.getElementById("dog-breeds");
  const breedDropdown = document.getElementById("breed-dropdown");

  let allBreeds = [];

  // -------------------------------
  // Challenge 1: Load random dog images
  // -------------------------------
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
      data.message.forEach((img) => {
        const imgTag = document.createElement("img");
        imgTag.src = img;
        imageContainer.appendChild(imgTag);
      });
    });

  // -------------------------------
  // Challenge 2: Load all dog breeds
  // -------------------------------
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      allBreeds = Object.keys(data.message);
      renderBreeds(allBreeds);
    });

  // Helper function to render breeds
  function renderBreeds(breeds) {
    breedList.innerHTML = ""; // clear previous
    breeds.forEach((breed) => {
      const li = document.createElement("li");
      li.textContent = breed;

      // -------------------------------
      // Challenge 3: Change color on click
      // -------------------------------
      li.addEventListener("click", () => {
        li.style.color = "blue"; // or any color you like
      });

      breedList.appendChild(li);
    });
  }

  // -------------------------------
  // Challenge 4: Filter breeds by dropdown
  // -------------------------------
  breedDropdown.addEventListener("change", (e) => {
    const selectedLetter = e.target.value;
    const filtered = allBreeds.filter((breed) =>
      breed.startsWith(selectedLetter)
    );
    renderBreeds(filtered);
  });
});
