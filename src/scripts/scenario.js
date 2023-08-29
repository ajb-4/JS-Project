export class Scenario {
    constructor(num) {
        this.num = num
        
        this.invAmount = 0
        this.startDate = 0

        this.invAmount

        this.createNewScenario(num)


    }




createNewScenario(num) {

const scenarios = document.querySelector(".scenarios")
scenarios.innerHTML +=  `<div class="scenario">
<div class="investmentbox">
  <label for="">Investment Amount:
    <input type="number" name="invAmount" id="invAmount${num}">
  </label>
  <br>
  <label for="">Start Year:
    <input type="number" name="startDate" id="startDate${num}">
  </label>
</div>

<div class="vehiclebox">
  <label for="">Duration:
    <input type="number" name="duration" id="duration${num}">
  </label>
  <br>
  <label for="">Vehicle:
    <input type="text" name="invVehicle" id="invVehicle${num}">
  </label>
  <br>
  <input type="button" value="Show Yield" class="testbuttonyield${num}">
  <br>
  <div id="apifetcher${this.num}">Total Yield</div>
</div>


<div class="yieldbox">
  <input type="button" value="Customize My Basket">
  <br>
  <input type="button" value="Show Me The Goods!" class="testbuttongoods${num}">
  <br>
  <div id="apifetch${this.num}">Goods Hash</div>
</div>
<input type="button" value="Delete this Scenario" class="deleteScenario${num}">
</div>`

    }
    
    deleteScenario() {
            
    }
   
    registerEvents() {
        test buttons
        add event listeners w/ ${this.num}
    }

    
};
export default Scenario