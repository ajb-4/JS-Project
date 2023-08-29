import Scenario from "./scripts/scenario";

document.addEventListener("DOMContentLoaded", async function() {
  console.log("Hello world!");
    
  let scenCounter = 0;

  const testButtonCreateScenario = document.querySelector(".testbuttonaddscenario");

  testButtonCreateScenario.addEventListener("click", () => {
    scenCounter += 1;
    new Scenario(scenCounter);
  })

});


