import {calculateYield} from "./vehicleModule";
import {determineQuantities} from "./goodsModule";

export class Scenario {
    constructor(num) {
        this.num = num;
        
        this.invAmount = 0;
        this.startDate = 0;
        this.duration = 0;
        this.invVehicle = "";
        this.createNewScenario = this.createNewScenario.bind(this);
        this.registerEvents = this.registerEvents.bind(this);
        this.deleteScenario = this.deleteScenario.bind(this);

        this.createNewScenario(num);
        this.registerEvents();

    }




createNewScenario(num) {

const scenarios = document.querySelector(".scenarios")
scenarios.innerHTML +=  `<div class="scenario" id="scenario${this.num}">
<div class="investmentbox">
  <label for="">Investment Amount($):
    <input type="number" name="invAmount" class="inputbox" id="invAmount${this.num}">
  </label>
  <br>
  <label for="">Start Year:
    <input type="number" name="startDate" class="inputbox" id="startDate${this.num}">
  </label>
  <br>
  <label for="">Duration(years):
    <input type="number" name="duration" class="inputbox" id="duration${this.num}">
  </label>
</div>

<div class="vehiclebox">
  <label for="">Ticker:
    <input type="text" name="invVehicle" class="inputbox" id="invVehicle${this.num}">
  </label>
  <br>
  <input type="button" value="Show Yield" class="testbuttonyield" id="testbuttonyield${this.num}">
  <br>
  <div id="apifetcher${this.num}">Total Yield:</div>
</div>

<div class="yieldbox">
  <input type="button" value="Customize My Basket" class="customizebasket" id="customizebasket${this.num}">
  <br>
  <input type="button" value="Show Me The Goods!" class="testbuttongoods" id="testbuttongoods${this.num}">
  <br>
  <div id="apifetch${this.num}"></div>
</div>

<div class="scenariosummary">
  <div id="invamountsum${this.num}">Investment Amount:</div>
  <br>
  <div id="startdatesum${this.num}">Start Date:</div>
  <br>
  <div id="enddatesum${this.num}">End Date:</div>
  <br>
  <div id="durationsum${this.num}">Duration:</div>
  <br>
  <div id="totyieldsum${this.num}">Total Yield:</div>
  <br>
  <div id="WHEATsum${this.num}">Wheat:</div>
  <br>
  <div id="CORNsum${this.num}">Corn:</div>
  <br>
  <div id="SUGARsum${this.num}">Sugar:</div>
  <br>
  <div id="COFFEEsum${this.num}">Coffee:</div>
</div>

<input type="button" value="Delete Scenario ${this.num}" class="deleteScenario" id="deleteScenario${this.num}">
</div>

        <div class="modalcontainer" id="modalcontainer${this.num}">
          <div class="modal${this.num}">
            <p>Please select your basket of goods. Values are percentages and therefore must add up to 100. </p>
            <label for="">Wheat:
              <input type="number" name="wheatmodal" id="wheatmodal${this.num}">
            </label>
            <label for="">Corn:
              <input type="number" name="cornmodal" id="cornmodal${this.num}">
            </label>
            <label for="">Sugar:
              <input type="number" name="sugarmodal" id="sugarmodal${this.num}">
            </label>
            <label for="">Coffee:
              <input type="number" name="coffeemodal" id="coffeemodal${this.num}">
            </label>
            <input type="button" value="Close Basket" id="exitmodal${this.num}">
          </div>
        </div>`

    };
    
    deleteScenario(scen) {
        const deleScen = document.getElementById(`scenario${scen}`)
        const deleModal = document.getElementById(`modalcontainer${scen}`)
        deleScen.remove(); 
        deleModal.remove();     
    }
   
    registerEvents() {
      
      let invAmount
      let startDate
      let duration
      let invVehicle

      const testButtonYield = document.getElementById(`testbuttonyield${this.num}`);

      testButtonYield.addEventListener("click", () => {
        invAmount = parseFloat(document.getElementById(`invAmount${this.num}`).value);
        startDate = parseInt(document.getElementById(`startDate${this.num}`).value);
        duration = parseFloat(document.getElementById(`duration${this.num}`).value);
        invVehicle = document.getElementById(`invVehicle${this.num}`).value;
        let scenyield = this.num
  
        calculateYield(invAmount, startDate, duration, invVehicle, scenyield)
      });

      let totalYield
      let endDate
      let preferences
      let wheatPref
      let cornPref
      let sugarPref
      let coffPref

      const testButtonGoods = document.getElementById(`testbuttongoods${this.num}`);

    testButtonGoods.addEventListener("click", () => {
      totalYield = document.getElementById(`apifetcher${this.num}`).getAttribute("value");
      endDate = (parseInt(document.getElementById(`startDate${this.num}`).value) + parseFloat(document.getElementById(`duration${this.num}`).value));
      wheatPref = document.getElementById(`wheatmodal${this.num}`).value;
      cornPref = document.getElementById(`cornmodal${this.num}`).value;
      sugarPref = document.getElementById(`sugarmodal${this.num}`).value;
      coffPref = document.getElementById(`coffeemodal${this.num}`).value;
      preferences = {"WHEAT": wheatPref, "CORN": cornPref, "SUGAR": sugarPref, "COFFEE": coffPref};
      let scengood = this.num
      determineQuantities(totalYield, endDate, preferences, scengood);
    });

    const deleteScenarioButton = document.getElementById(`deleteScenario${this.num}`);

    deleteScenarioButton.addEventListener("click", () => {
      let scenDelete = this.num;
      this.deleteScenario(scenDelete);
    });

    const custBasketButton = document.getElementById(`customizebasket${this.num}`);

    custBasketButton.addEventListener("click", () => {
        const modalcontainer = document.getElementById(`modalcontainer${this.num}`);
        modalcontainer.style.display = "block";
    });

    const exitCustBaskButton = document.getElementById(`exitmodal${this.num}`);

    exitCustBaskButton.addEventListener("click", () => {
      const modalcontainer = document.getElementById(`modalcontainer${this.num}`);
      modalcontainer.style.display = "none";
    });

  }

    
};
export default Scenario