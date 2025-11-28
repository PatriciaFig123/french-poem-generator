function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructios");
  let apiKey = "tao7baef468f14105432d33cc99439dd";
  let prompt = `User instructions: Generate a French Poem about ${instructionsInput.value}`;
  let context = `You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem basic and separate each line with a <br/>. Make sure to follow the user instructions. Do not inclue a tittle to the poem.  Sign the poem with 'SheCodes AI inside a <strong> element`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: [poem],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
