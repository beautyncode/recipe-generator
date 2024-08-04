function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Lemon, Sugar, Water",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
