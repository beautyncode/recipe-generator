function displayRecipe(response) {
  console.log("Recipe Generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "dcbe9afdd9023a013ceaof19ted4923f";
  let context =
    "You love to cook and you have an endless supply of recipes to share with others. Your mission is to generate a simple and easy to follow recipe based on the instructions provided. The recipe should be specifically tailored to the instructions and should include step-by-step instructions in HTML format, such as using <p> tags for each step. Sign the recipe with 'AI Integrations by Kenyata Walls' inside a <strong> element.";
  let prompt = `Generate a recipe for "${instructionsInput.value}".`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`context: ${context}`);
  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
