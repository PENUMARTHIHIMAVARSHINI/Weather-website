function displayPreferences() {
    var name = document.getElementById("name").value;
    var color = document.getElementById("color").value.toLowerCase();
    var food = document.getElementById("food").value.toLowerCase();
    var animal = document.getElementById("animal").value.toLowerCase();

    var weather = determineWeather(color, food, animal);

    var displayArea = document.getElementById("preferencesDisplay");
    displayArea.innerHTML = "<h3>Hi " + name + "!</h3>" +
                            "<p>Your favorite color is <strong>" + color + "</strong>.</p>" +
                            "<p>Your favorite food is <strong>" + food + "</strong>.</p>" +
                            "<p>Your favorite animal is <strong>" + animal + "</strong>.</p>" +
                            "<p>Based on your preferences, we think your favorite weather is <strong>" + weather + "</strong>.</p>";
}

function determineWeather(color, food, animal) {
    // Determine weather based on favorite color
    if (['blue', 'green', 'yellow', 'orange'].includes(color)) {
        return "Sunny";
    } else if (['grey', 'white'].includes(color)) {
        return "Cloudy";
    } else if (['black', 'dark'].includes(color)) {
        return "Rainy";
    }

    // Determine weather based on favorite food
    if (food.includes("ice cream") || food.includes("cold")) {
        return "Snowy";
    } else if (food.includes("spicy") || food.includes("bbq")) {
        return "Sunny";
    } else if (food.includes("soup") || food.includes("hot")) {
        return "Rainy";
    }

    // Determine weather based on favorite animal
    if (['bird', 'butterfly'].includes(animal)) {
        return "Sunny";
    } else if (['fish', 'frog'].includes(animal)) {
        return "Rainy";
    } else if (['bear', 'penguin'].includes(animal)) {
        return "Snowy";
    }

    // Default weather if no match
    return "Sunny";
}
