document.addEventListener("DOMContentLoaded", function () {
  // Beach recommendations data
  const beachRecommendations = [
    {
      name: "Phuket Beach",
      description:
        "Enjoy the crystal-clear waters and stunning sunsets at Phuket Beach. Perfect for a relaxing getaway.",
      imageUrl:
        "https://images.pexels.com/photos/2867732/pexels-photo-2867732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Maldives Beach",
      description:
        "Experience the pristine sands and vibrant marine life at Maldives Beach. A paradise for beach lovers.",
      imageUrl:
        "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // Temple recommendations data
  const templeRecommendations = [
    {
      name: "Angkor Wat",
      description:
        "Discover the ancient wonders of Angkor Wat, a UNESCO World Heritage Site located in Cambodia.",
      imageUrl:
        "https://images.pexels.com/photos/30590817/pexels-photo-30590817/free-photo-of-explore-the-majestic-angkor-wat-in-cambodia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Fushimi Inari Shrine",
      description:
        "Explore the iconic torii gates of Fushimi Inari Shrine in Kyoto, Japan. A must-visit cultural site.",
      imageUrl:
        "https://images.pexels.com/photos/2091034/pexels-photo-2091034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // Country-based recommendations data
  const countryRecommendations = [
    {
      name: "Thailand",
      description:
        "Experience the vibrant culture, stunning beaches, and delicious cuisine of Thailand. A traveler’s delight.",
      imageUrl:
        "https://images.pexels.com/photos/208444/pexels-photo-208444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Italy",
      description:
        "Explore the rich history, art, and architecture of Italy. From Rome to Venice, every city has its charm.",
      imageUrl:
        "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // Function to load recommendations into a section
  function loadRecommendations(recommendations, sectionId) {
    const section = document.getElementById(sectionId);
    recommendations.forEach((recommendation) => {
      const recommendationElement = document.createElement("div");
      recommendationElement.classList.add("recommendation");

      const imageElement = document.createElement("img");
      imageElement.src = recommendation.imageUrl;
      imageElement.alt = recommendation.name;

      const descriptionElement = document.createElement("div");
      descriptionElement.classList.add("description");

      const nameElement = document.createElement("h3");
      nameElement.textContent = recommendation.name;

      const descriptionTextElement = document.createElement("p");
      descriptionTextElement.textContent = recommendation.description;

      descriptionElement.appendChild(nameElement);
      descriptionElement.appendChild(descriptionTextElement);

      recommendationElement.appendChild(imageElement);
      recommendationElement.appendChild(descriptionElement);

      section.appendChild(recommendationElement);
    });
  }

  // Load all recommendations
  loadRecommendations(beachRecommendations, "beaches");
  loadRecommendations(templeRecommendations, "temples");
  loadRecommendations(countryRecommendations, "countries");
});
