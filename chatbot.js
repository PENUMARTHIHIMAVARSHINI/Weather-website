// Weather conditions and corresponding recommendations with emojis
const weatherRecommendations = {
  "sunny": {
    clothes: "👕 Light and breathable clothes like shorts, t-shirts, and sunglasses.",
    food: "🍹 Refreshing foods like salads, fruits, and cold drinks.",
    precautions: "🧴 Apply sunscreen with SPF 30 or higher. Stay hydrated.",
    activities: "🏊 Enjoy outdoor activities like swimming, hiking, or picnics.",
    mood: "😊 Sunny weather often improves mood and energy levels."
  },
  "rainy": {
    clothes: "🧥 Waterproof jacket, umbrella, and waterproof shoes.",
    food: "🍵 Warm foods like soups, tea, and coffee.",
    precautions: "☔ Carry an umbrella and wear appropriate footwear to avoid slipping.",
    activities: "📚 Indoor activities like reading, board games, or movie marathons.",
    mood: "🌧️ Rainy weather can be cozy, perfect for relaxation and introspection."
  },
  "cloudy": {
    clothes: "🧥 Layers like a light sweater or jacket.",
    food: "🍲 Comforting foods like warm soup, grilled cheese sandwiches.",
    precautions: "☁️ Carry a light jacket or umbrella in case it rains.",
    activities: "🚶‍♂️ Outdoor activities like walking, or indoor activities like crafting or baking.",
    mood: "☁️ Cloudy weather can be calming, ideal for reflection and creativity."
  },
  "windy": {
    clothes: "🧥 Wind-resistant clothing like a windbreaker or layered clothing.",
    food: "🥜 Energizing foods like nuts, whole grains, and protein bars.",
    precautions: "💨 Secure loose objects outdoors. Be cautious of strong gusts.",
    activities: "🪁 Outdoor activities like kite flying or windsurfing (with caution).",
    mood: "🌬️ Windy weather can be invigorating, perfect for outdoor adventures."
  }
};

// Function to process user input and provide recommendations
function processUserInput(input) {
  const lowerInput = input.toLowerCase().trim();
  let response = {};

  if (lowerInput.includes("not")) {
    response = "Please be specific about the weather conditions or choose the options from the above";
  } else if (lowerInput.includes("sunny")) {
    response = weatherRecommendations.sunny;
  } else if (lowerInput.includes("rainy")) {
    response = weatherRecommendations.rainy;
  } else if (lowerInput.includes("cloudy")) {
    response = weatherRecommendations.cloudy;
  } else if (lowerInput.includes("windy")) {
    response = weatherRecommendations.windy;
  } else {
    response = "Please specify the weather condition you want recommendations for.";
  }

  return response;
}

// Function to display the chatbot response in a table format
function displayResponse(response) {
  const chatbox = document.getElementById("chatbox");
  const previousResponse = chatbox.querySelector(".message.sent");

  // Clear previous response
  if (previousResponse) {
    previousResponse.remove();
  }

  const message = document.createElement("div");
  message.classList.add("message", "sent");
  
  if (typeof response === "object") {
    message.innerHTML = `
      <table border="1" cellpadding="5">
        <tr><th>Category</th><th>Recommendation</th></tr>
        <tr><td><strong>Clothes:</strong></td><td>${response.clothes}</td></tr>
        <tr><td><strong>Food:</strong></td><td>${response.food}</td></tr>
        <tr><td><strong>Precautions:</strong></td><td>${response.precautions}</td></tr>
        <tr><td><strong>Activities:</strong></td><td>${response.activities}</td></tr>
        <tr><td><strong>Mood:</strong></td><td>${response.mood}</td></tr>
      </table>
    `;
  } else {
    message.textContent = response;
  }
  
  chatbox.appendChild(message);
}

// Event listener for the send button
document.getElementById("send-btn").addEventListener("click", function() {
  const userInput = document.getElementById("user-message").value;
  const response = processUserInput(userInput);
  displayResponse(response);
});

// Event listeners for weather buttons
document.getElementById("sunny-btn").addEventListener("click", function() {
  displayResponse(weatherRecommendations.sunny);
});

document.getElementById("rainy-btn").addEventListener("click", function() {
  displayResponse(weatherRecommendations.rainy);
});

document.getElementById("cloudy-btn").addEventListener("click", function() {
  displayResponse(weatherRecommendations.cloudy);
});

document.getElementById("windy-btn").addEventListener("click", function() {
  displayResponse(weatherRecommendations.windy);
});
