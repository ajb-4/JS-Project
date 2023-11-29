import Scenario from "./scripts/scenario";

document.addEventListener("DOMContentLoaded", async function() {
  console.log("Hello world!");

  const closeinstructions = document.getElementById("closeinstructions");
  const modaloverlay = document.getElementById("modaloverlay");

  closeinstructions.addEventListener("click", () => {
    const instructionsmodal = document.querySelector(".instructions");
    instructionsmodal.style.display = "none";
  })

  modaloverlay.addEventListener("click", () => {
    const instructionsmodal = document.querySelector(".instructions");
    instructionsmodal.style.display = "none";
  })
    
  let scenCounter = 0;

  const testButtonCreateScenario = document.querySelector(".testbuttonaddscenario");

  testButtonCreateScenario.addEventListener("click", () => {
    scenCounter += 1;
    new Scenario(scenCounter);
  })

});


