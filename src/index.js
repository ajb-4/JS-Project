import Scenario from "./scripts/scenario";
import {calculateYield} from "./scripts/vehicleModule";
import {determineQuantities} from "./scripts/goodsModule";


document.addEventListener("DOMContentLoaded", async function() {
  console.log("Hello world!");
    
  let invAmount
  let startDate
  let duration
  let invVehicle

  let totalYield
  let endDate
  let preferences
  let scenCounter = 0;

  const testButtonYield = document.querySelector(".testbuttonyield");

  // testButtonYield.addEventListener("click", () => {
  //   invAmount = parseFloat(document.getElementById("invAmount").value);
  //   startDate = parseInt(document.getElementById("startDate").value);
  //   duration = parseFloat(document.getElementById("duration").value);
  //   invVehicle = document.getElementById("invVehicle").value;
  //   calculateYield(invAmount, startDate, duration, invVehicle)
  // });

  const testButtonGoods = document.querySelector(".testbuttongoods");

  // testButtonGoods.addEventListener("click", () => {
  //   totalYield = document.getElementById("apifetcher").getAttribute("value");
  //   endDate = (parseInt(document.getElementById("startDate").value) + parseFloat(document.getElementById("duration").value));
  //   preferences = {"WHEAT": 70, "CORN": 30};
  //   determineQuantities(totalYield, endDate, preferences)
  // });



  const testButtonCreateScenario = document.querySelector(".testbuttonaddscenario");

  testButtonCreateScenario.addEventListener("click", () => {
    scenCounter += 1;
    new Scenario(scenCounter);
  })

});


